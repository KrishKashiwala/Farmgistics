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
// import { Link } from 'react-router-dom';
import { LOGIN_FARMER } from '../graphql/mutations';
import './componentsCss/login.css';
import './componentsCss/signup.css';

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
// let check: boolean = false;
const Login = ({ show }: any) => {
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
            }
        })
            .then(function (response) {
                // eslint-disable-next-line eqeqeq
                if (data?.login.redirect === '/home') {
                    window.location.href = `/home/${data?.login.id}`;
                    // eslint-disable-next-line eqeqeq
                } else if (data?.login.redirect === '/notfound') {
                    window.location.href = '/notfound';
                }
            })
            .catch(function (error) {
                document.write(error);
            });
    };
    if (error) {
        console.log(error);
    }
    console.log(`${data?.login.id}`)
    localStorage.setItem('jwt-token', `${data?.login.token}`);

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
                        {/* <Link to= `${/home/{data.login.id}}`> */}
                        <Button
                            className={classes.margin}
                            fullWidth
                            color="secondary"
                            variant="contained"
                            onClick={loggedIn}
                        >
                            Submit
                        </Button>
                        {/* </Link> */}
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};
export default Login;
