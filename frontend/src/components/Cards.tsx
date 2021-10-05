import { Link, Redirect } from "react-router-dom";
import "./componentsCss/cards.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import img1 from "./assests/img1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  media: {
    height: 150,
  },
  large: {
    width: 50,
    height: 50,
  },
});

const Cards = ({ des, title, price }: any) => {
  const classes = useStyles();

  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to='/product'>
            <CardMedia
              className={classes.media}
              image={img1}
              title='Vegetable'
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {des}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              price : &#x20B9;{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to='/product'>Buy Now</Link>
          <Link to='/product'>Add to Cart</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
