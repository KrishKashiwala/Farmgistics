import './componentsCss/profile.css';
import { Avatar, makeStyles, createStyles, Theme } from '@material-ui/core';
import farmgistic_logo from './assests/farmgistic_logo.png';
import { useMutation } from '@apollo/client';
import { FIND_FARMER } from '../graphql/mutations';
import Navbar from './Navbar';
import OrderItem from './OrderItem';
import React from 'react';

interface farmer {
    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
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
        }
    })
);
const Profile = ({ match }: any) => {
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
        </div>
    );
};
export default Profile;
