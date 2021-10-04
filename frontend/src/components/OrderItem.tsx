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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWidth: {
      maxWidth: 345,
    },
  })
);
const OrderItem = ({ title, des, url }: any) => {
  const classes = useStyles();
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
            <Typography variant='body2' color='textSecondary' component='p'>
              {des}
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
