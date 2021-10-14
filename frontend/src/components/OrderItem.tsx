import {
    Card,
    Typography,
    makeStyles,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    Theme,
    createStyles,
    CardActions
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardWidth: {
            maxWidth: 345
        }
    })
);
const OrderItem = ({ title, des, url, price, city }: any) => {
    const classes = useStyles();
    console.log(url);
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="order-item">
            <div className="row">
                <div className="col">
                    <img src={url} alt="image"></img>
                </div>
                <div className="col details">
                    <h4>{title}</h4>
                    <p>{des}</p>
                    <p>Price : &#8377; {price}</p>
                    <p>City : {city}</p>
                </div>
            </div>
        </div>
    );
};
export default OrderItem;
