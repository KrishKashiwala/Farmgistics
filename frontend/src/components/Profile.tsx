<<<<<<< HEAD
import './componentsCss/profile.css';
import './componentsCss/orderItem.css';
import {
    makeStyles,
    createStyles,
    Theme,
    Fab,
    Tooltip
} from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { FIND_FARMER, FIND_FARMER_POST } from '../graphql/mutations';
import Navbar from './Navbar';
import OrderItem from './OrderItem';
import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';
import Registerpost from './Registerpost';
import AddIcon from '@material-ui/icons/Add';
import { farmer, allOrders } from '../../interface';
import { Redirect } from 'react-router';

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
const Profile = () => {

    const context = useContext(UserContext);
    const [postBool, setPostBool] = useState<Boolean>(false);
    const classes = useStyles();
    const [getByIdFarmers] = useMutation<farmer>(FIND_FARMER);
    const firstProfileLoader = () => {
        getByIdFarmers({
            variables: {
                id: context.Id
            }
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-redeclare
    const [getAllFarmers, { data, error }] =
        useMutation<allOrders>(FIND_FARMER_POST);
    const firstOrders = () => {
        getAllFarmers({
            variables: {
                farmerId: context.Id
            }
        });
    };
    if (error || !data) console.log(error);

    React.useEffect(() => {
        const token = localStorage.getItem('jwt-token');
        if (!token) console.log('no token');
        else console.log(token);
        firstProfileLoader();
        firstOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(context.Id === null){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <Navbar/>
            <div className="root">
                <br />
                <div className="lower-container">
                    {data?.getAllFarmers.map((item) => (
                        <OrderItem
                            val={`${context.Id}`}
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
            <Registerpost val={`${context.Id}`} postBool={postBool} />
        </div>
    );
};
export default Profile;
=======
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
    window.onbeforeunload = (event) => {
        localStorage.removeItem('logged-in');
    };

    let loggedIn = localStorage.getItem('logged-in');
    let sessionLoggedIn = sessionStorage.getItem('logged-in');
    if (!loggedIn) {
        if (sessionLoggedIn) {
            localStorage.setItem('logged-in', JSON.parse(sessionLoggedIn));
            //go to authenticated space
            window.location.href = '/authenticated';
        } else {
            //go to login
            window.location.href = '/login';
        }
    } else {
        //go to authenticated space
        window.location.href = '/authenticated';
    }
    window.addEventListener('storage', (event) => {
        if (event.key === 'logout' && event.newValue) {
            sessionStorage.removeItem('logged-in');
            localStorage.removeItem('logout');
            window.location.href = '/login';
        }
    });

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
        const token = localStorage.getItem('jwt-token');
        if (!token) console.log('no token');
        else console.log(token);
        firstProfileLoader();
        firstOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Navbar/>
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
>>>>>>> f6ccaef625972c7081e2a2de4a84f7ee8e646785
