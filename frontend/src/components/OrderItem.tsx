import farmgistic_logo from "./assests/farmgistic_logo.png";
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
  CardActions,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWidth: {
      maxWidth: 345,
    },
  })
);
const OrderItem = ({ title, des, url, price, city }: any) => {
  const classes = useStyles();
  console.log(url);
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <Card className={classes.cardWidth}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='140'
            src={url}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              &#8377; {price}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {des}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {city}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color='secondary' variant='contained'>
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default OrderItem;
