import { useEffect, useContext } from 'react';
import UserContext from '../Context/UserContext';
import './componentsCss/homepage.css';
import { FIND_FARMER } from '../graphql/mutations';
import { useMutation,gql } from '@apollo/client';
import * as compose from 'lodash.flowright';
import { farmer } from '../../interface';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Avatar from '@material-ui/core/Avatar';
import fimg from './assests/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg';
import simg from './assests/josephine-baran-g4wzhY8qiMw-unsplash.jpg';
import timg from './assests/nrd-D6Tu_L3chLE-unsplash.jpg';
import Cards from "./Cards";
import Footer from './Footer';
import { graphql } from 'graphql';
const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    media: {
        height: 150
    },
    large: {
        width: 80,
        height: 80
    }
});

const Homepage = () => {

    const context = useContext(UserContext);
    // const mutu = compose(
    //     graphql(FIND_FARMER,{
    //         name : 'FIND_FARMER'
    //     })
    // )

    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
    const farmerRequest = () => {
        getByIdFarmers({
            variables: {
                id: context.Id
            }
        });
    }; 
    if (error || !data) console.log(error);
 
    useEffect(() => {
        farmerRequest();
        console.log(data?.getByIdFarmers.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const classes = useStyles();

    return (
        <div className="main-container">
            <Navbar/>
            <div className="image-slider">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li
                            data-target="#demo"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={"https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="Los Angeles"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="Chicago"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={"https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="New York"></img>
                            <img src={fimg} alt="Los Angeles"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={simg} alt="Chicago"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={timg} alt="New York"></img>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#demo"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#demo"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="trending-products">
                <div className="heading">
                    <h2>Trending Products</h2>
                    <h2>{data?.getSecond?.name}</h2>
                    <hr></hr>
                </div>
            </div>
            <div className="product-list">
                <div className="product-links">
                    <ul>
                        <li>
                            <button data-toggle="collapse" data-target="#featured">FEATURED</button>
                        </li>
                        <li>
                            <button data-toggle="collapse" data-target="#bestseller">BESTSELLER</button>
                        </li>
                        <li>
                            <button data-toggle="collapse" data-target="#latest">LATEST</button>
                        </li>
                    </ul>
                </div>
                <div id="products">
                    <div id="featured" className="collapse show" data-parent="#products"> 
                        <div className="row product-cards">
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                            <Cards/>
                        </div>
                    </div>
                    <div id="bestseller" className="collapse" data-parent="#products"> 
                        <div className="row product-cards">
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        </div>
                    </div>
                    <div id="latest" className="collapse" data-parent="#products"> 
                        <div className="row product-cards">
                        <Cards/>
                        <Cards/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-section">
                <div className="heading">
                    <h2>Review of Traders</h2>
                    <hr></hr>
                </div>
                <div className="review-slider">
                    <div
                        id="review"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="review-profile">
                                    <Avatar
                                        alt="Fruits"
                                        src={require('./assests/fruit.jpg')}
                                        className="avatar"
                                    />
                                    <h5>John Deo</h5>
                                    <p>Laxman Traders</p>
                                </div>
                                <div className="review-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed venenatis porttitor
                                        leo, volutpat facilisis augue posuere
                                        et. In in est et neque scelerisque
                                        mattis. Aenean lacus est, efficitur ut
                                        posuere sit amet, pulvinar ac felis. Sed
                                        sed scelerisque odio. Nulla id diam
                                        posuere, ultrices purus et, dignissim
                                        risus. Suspendisse sit.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="review-profile">
                                    <Avatar
                                        alt="Fruits"
                                        src={require('./assests/fruit.jpg')}
                                        className="avatar"
                                    />
                                    <h5>Laxman Prashad</h5>
                                    <p>Shiv Traders</p>
                                </div>
                                <div className="review-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed venenatis porttitor
                                        leo, volutpat facilisis augue posuere
                                        et. In in est et neque scelerisque
                                        mattis. Aenean lacus est, efficitur ut
                                        posuere sit amet, pulvinar ac felis. Sed
                                        sed scelerisque odio. Nulla id diam
                                        posuere, ultrices purus et, dignissim
                                        risus. Suspendisse sit.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="review-profile">
                                    <Avatar
                                        alt="Fruits"
                                        src={require('./assests/fruit.jpg')}
                                        className="avatar"
                                    />
                                    <h5>Mukesh Sheth</h5>
                                    <p>Sheth Traders</p>
                                </div>
                                <div className="review-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed venenatis porttitor
                                        leo, volutpat facilisis augue posuere
                                        et. In in est et neque scelerisque
                                        mattis. Aenean lacus est, efficitur ut
                                        posuere sit amet, pulvinar ac felis. Sed
                                        sed scelerisque odio. Nulla id diam
                                        posuere, ultrices purus et, dignissim
                                        risus. Suspendisse sit.
                                    </p>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#review"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#review"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                        <ul className="carousel-indicators">
                            <li
                                data-target="#review"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li data-target="#review" data-slide-to="1"></li>
                            <li data-target="#review" data-slide-to="2"></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Homepage;
