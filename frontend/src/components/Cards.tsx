import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import img1 from "./assests/img1.jpg"

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

const Cards = () => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = { img1 }
                            title="Vegetable"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vegetable
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec sed vulputate odio. Nunc tincidunt a enim ac tristique. 
                            Praesent laoreet eu diam vitae faucibus. Suspendisse.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Buy Now
                            </Button>
                            <Button size="small" color="primary">
                            Add To Cart
                            </Button>
                        </CardActions>
            </Card>
        </div>
    )
}

export default Cards
