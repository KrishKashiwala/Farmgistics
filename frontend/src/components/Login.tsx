import {
    TextField,
    ThemeProvider,
    makeStyles,
    createTheme,
    createStyles,
    Typography,
    Theme,
    Button
} from '@material-ui/core';
import React, { useState } from 'react';
import { green } from '@material-ui/core/colors';
import { useMutation } from '@apollo/client';
// import farmgistic_logo from './assests/farmgistic_logo.png';

import { LOGIN_FARMER } from '../graphql/mutations';
import './componentsCss/login.css';
import './componentsCss/signup.css';

import {useHistory} from 'react-router-dom'

const theme = createTheme({
    palette: {
        primary: green
    }
});
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1)
        }
    })
);
// interface login {
//     token: String;
// }
const Login = ({ show }: any) => {
    const history = useHistory()
    const [login, { data, error }] = useMutation(LOGIN_FARMER);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    if (!show) {
        return null;
    }
    const loggedIn = () => {
        login({
            variables: {
                email: email,
                password: password
            },
             
        });
    };
    if (error) {
        console.log(error);
    }
    console.log(localStorage.setItem('jwt-token', `${data?.login.token}`));

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3">
                            Log in to Farmgistic
                        </Typography>
                        <br />
                        <br />
                        <TextField
                            className={classes.margin}
                            label="Email"
                            fullWidth
                            variant="outlined"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(e.target.value)}
                        />
                        <TextField
                            className={classes.margin}
                            label="Password"
                            fullWidth
                            type="password"
                            variant="outlined"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <Button
                            className={classes.margin}
                            fullWidth
                            color="secondary"
                            variant="contained"
                            onClick={loggedIn}
                        >
                            Submit
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
export default Login;
