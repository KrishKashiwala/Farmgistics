import { Avatar, makeStyles, createStyles, Theme } from '@material-ui/core';
import farmgistic_logo from './assests/farmgistic_logo.png';
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
const Profile = () => {
    const classes = useStyles();
    return (
        <div className="root">
            <Avatar
                src={farmgistic_logo}
                alt="profile_pic"
                className={classes.large}
            ></Avatar>
            <h1>hei</h1>
        </div>
    );
};
export default Profile;
