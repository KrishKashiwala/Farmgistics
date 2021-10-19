import './componentsCss/profile.css';
import './componentsCss/orderItem.css';
import {
    makeStyles,
    createStyles,
    Theme,
    Fab,
    Tooltip
} from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { FIND_FARMER, POST_BY_FARMER } from '../graphql/queries';
import Navbar from './Navbar';
import OrderItem from './OrderItem';
import React, { useState } from 'react';
import Registerpost from './Registerpost';
import AddIcon from '@material-ui/icons/Add';
import { farmer, postArray } from '../../interface';
import { Redirect, useHistory } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';

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
        },
        logout: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: theme.spacing(3)
        }
    })
);
const Profile = () => {
    const history = useHistory();
    // const context = useContext(UserContext);
    const [postBool, setPostBool] = useState<Boolean>(false);
    const classes = useStyles();

    // backend code
    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: localStorage.getItem('id')
        }
    });

    const {
        data: data_post,
        error: error_post,
        loading: loading_post
    } = useQuery<postArray>(POST_BY_FARMER, {
        variables: {
            farmerId: localStorage.getItem('id')
        }
    });
    if (!data_post || error_post || loading_post) console.log(error_post);
    if (error_id || !data_id || loading_id) console.log(error_id);
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    // const { data, error } = useQuery<allOrders>(FIND_FARMER_POST);
    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('jwt-token');
        history.push('/');
    };
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="root">
                <div className="lower-container">
                    <br/>
                    <div className="heading">
                        <h3>My Products</h3>
                        <hr></hr>
                    </div>
                    <br/>
                    <div className="cards-cont">
                        {data_post?.getPostByFarmer.map((item) => (
                            <OrderItem
                                title={item.title}
                                des={item.des}
                                url={item.url}
                                price={item.price}
                                city={item.city}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Tooltip title="Logout">
                <Fab
                    color="primary"
                    className={classes.logout}
                    onClick={logout}
                >
                    <LogoutIcon />
                </Fab>
            </Tooltip>
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
                val={localStorage.getItem('id')}
                postBool={postBool}
                setPostBool={setPostBool}
            />
        </div>
    );
};
export default Profile;
