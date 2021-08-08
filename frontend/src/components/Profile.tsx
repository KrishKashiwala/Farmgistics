import './componentsCss/profile.css';
import {
    Avatar,
    makeStyles,
    createStyles,
    Theme,
    Fab,
    Tooltip
} from '@material-ui/core';
import farmgistic_logo from './assests/farmgistic_logo.png';
import { useMutation } from '@apollo/client';
import { FIND_FARMER } from '../graphql/mutations';
import Navbar from './Navbar';
import OrderItem from './OrderItem';
import React, { useState } from 'react';
import Registerpost from './Registerpost';
import AddIcon from '@material-ui/icons/Add';
interface farmer {
    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: String;
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3)
        },
        large: {
            width: '10em',
            height: '10em'
        },
        fab: {
            margin: theme.spacing(2)
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3)
        }
    })
);
const Profile = ({ match }: any) => {
    const [postBool, setPostBool] = useState(false);
    const classes = useStyles();
    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
    const firstProfileLoader = () => {
        getByIdFarmers({
            variables: {
                id: match.params.id
            }
        });
    };
    console.log(data);
    if (error || !data) console.log(error);
    React.useEffect(() => {
        firstProfileLoader();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    localStorage.setItem('ids', `${match.params.id}`);
    return (
        <div>
            <Navbar style={{ width: '100%' }} />
            <div className="root">
                <div className="upper-container">
                    <Avatar
                        src={farmgistic_logo}
                        alt="profile_pic"
                        className={classes.large}
                    ></Avatar>
                    <div className="info-container">
                        <h5>Name : {data?.getByIdFarmers.name}</h5>
                        <h5>Email : {data?.getByIdFarmers.email}</h5>
                        <h5>city : {data?.getByIdFarmers.city}</h5>
                    </div>
                </div>
                <div className="lower-container">
                    <OrderItem val={`${match.params.id}`} />
                </div>
            </div>
            <Tooltip title="Add Crop">
                <Fab
                    color="secondary"
                    onClick={() => setPostBool(true)}
                    className={classes.absolute}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Registerpost
                val={`${data?.getByIdFarmers.id}`}
                postBool={postBool}
            />
        </div>
    );
};
export default Profile;
