import './componentsCss/profile.css';
import './componentsCss/orderItem.css';
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
import { FIND_FARMER, FIND_FARMER_POST } from '../graphql/mutations';
import Navbar from './Navbar';
import OrderItem from './OrderItem';
import React, { useState } from 'react';
import Registerpost from './Registerpost';
import AddIcon from '@material-ui/icons/Add';
import { farmer, allOrders } from '../../interface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(3)
        }
    })
);
const Profile = ({ match, history }: any) => {
    const [postBool, setPostBool] = useState<Boolean>(false);
    const classes = useStyles();
    const [getByIdFarmers] = useMutation<farmer>(FIND_FARMER);
    const firstProfileLoader = () => {
        getByIdFarmers({
            variables: {
                id: match.params.id
            }
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    const [getAllFarmers, { data, error }] =
        useMutation<allOrders>(FIND_FARMER_POST);
    const firstOrders = () => {
        getAllFarmers({
            variables: {
                farmerId: match.params.id
            }
        });
    };
    if (error || !data) console.log(error);
    console.log(data);
    if (error || !data) console.log(error);
    React.useEffect(() => {
        const token = localStorage.getItem("jwt-token")
        if(!token) console.log('no token')
        else console.log(token)
        firstProfileLoader();
        firstOrders();
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
                    {/* <div className="info-container">
                        <h5>Name : {data?.getByIdFarmers.name}</h5>
                        <h5>Email : {data?.getByIdFarmers.email}</h5>
                        <h5>city : {data?.getByIdFarmers.city}</h5>
                    </div> */}
                </div>
                <br />
                <div className="lower-container">
                    {data?.getAllFarmers.map((item) => (
                        <OrderItem
                            val={`${match.params.id}`}
                            title={item.title}
                            des={item.des}
                        />
                    ))}
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
            <Registerpost val={`${match.params.id}`} postBool={postBool} />
        </div>
    );
};
export default Profile;
