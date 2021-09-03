import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './componentsCss/homepage.css';
import { FIND_FARMER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { farmer } from '../../interface';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

const Homepage = ({ match }: any) => {
    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
    const farmerRequest = () => {
        getByIdFarmers({
            variables: {
                id: match?.params.id
            }
        });
    };
    if (error || !data) console.log(error);

    useEffect(() => {
        farmerRequest();
        console.log(data?.getByIdFarmers?.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classes = useStyles();

    return (
        <div>
            <Navbar id={match.params.id} />
            <div className="image-slider">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ require('./assests/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg')} alt="Los Angeles"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={ require('./assests/josephine-baran-g4wzhY8qiMw-unsplash.jpg') } alt="Chicago"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={ require('./assests/nrd-D6Tu_L3chLE-unsplash.jpg') } alt="New York"></img>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="trending-products">
                <div className="heading">
                    <h2>Trending Products</h2>
                    <hr></hr>
                </div>
            </div>
            <div className="product-list">
                <div className="product-links">
                    <ul>
                        <li>
                            <a href="">FEATURED</a>
                        </li>
                        <li>
                            <a href="">BESTSELLER</a>
                        </li>
                        <li>
                            <a href="">LATEST</a>
                        </li>
                    </ul>
                </div>
                <div className='product-cards'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img1.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img2.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img3.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img4.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img5.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img1.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img2.jpg")}
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image = {require("./assests/img3.jpg")}
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
            </div>
            <div className="our-category">
                <div className="heading">
                    <h2>Our Category</h2>
                    <hr></hr>
                </div> 
            </div>
            <div className="categories">
                <div className="single-category">
                    <a>
                        <Avatar alt="Fruits" src={require("./assests/fruit.jpg")} className={classes.large} />
                    </a>
                    <Typography gutterBottom variant="h6" component="h6">
                        Fruits
                    </Typography>
                </div>
                <div className="single-category">
                    <a>
                        <Avatar alt="Vegetables" src={require("./assests/vegetable.jpg")} className={classes.large} />
                    </a>
                    <Typography gutterBottom variant="h6" component="h6">
                        Vegetables
                    </Typography>
                </div>
                <div className="single-category">
                    <a>
                        <Avatar alt="Spices" src={require("./assests/spices.jpg")} className={classes.large} />
                    </a>
                    <Typography gutterBottom variant="h6" component="h6">
                        Spices
                    </Typography>
                </div>
            </div>
        </div>
    );
};
export default Homepage;
