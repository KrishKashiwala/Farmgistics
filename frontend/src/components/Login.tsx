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
import { green } from '@material-ui/core/colors';

// import farmgistic_logo from './assests/farmgistic_logo.png';

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
    const classes = useStyles();
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <ThemeProvider theme={theme}>
                        {/* <img src={farmgistic_logo} alt="farmgistic_logo" /> */}
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
                        />
                        <TextField
                            className={classes.margin}
                            label="Password"
                            fullWidth
                            type="password"
                            variant="outlined"
                        />
                        <br />
                        <br />
                        <Button
                            className={classes.margin}
                            fullWidth
                            color="secondary"
                            variant="contained"
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
