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
import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';
import { green } from '@material-ui/core/colors';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { LOGIN_FARMER } from '../graphql/mutations';
import { logged } from '../../interface';
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

const Login = ({ show }: any) => {
    const [login, { data, error }] = useMutation<logged>(LOGIN_FARMER);

    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();
    const classes = useStyles();
    const context = useContext(UserContext);
    if (!show) {
        return null;
    }
    const loggedIn = () => {
        login({
            variables: {
                email: email,
                password: password
            }
        });
    };

    if (error || !data) {
        console.log(error);
    }
    // context.setValue(data?.login.id, data?.login.token);

    localStorage.setItem('jwt-token', `${data?.login.token}` as string);
    localStorage.setItem('id', `${data?.login.id}` as string);
    console.log(data?.login.id, data?.login.token);
    // sessionStorage.setItem('logged-in', 'true');
    // if (localStorage.getItem('id') === null) <Redirect to="/home" />;
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
            {data?.login.id && <Redirect to="/home"></Redirect>}
        </div>
    );
};
export default Login;
