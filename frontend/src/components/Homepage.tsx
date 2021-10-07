import { useEffect, useContext } from 'react';
// import UserContext from '../Context/UserContext';
import './componentsCss/homepage.css';
import { ALL_THINGS, FIND_FARMER } from '../graphql/queries';
import { ALL_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import Navbar from './Navbar';
import Avatar from '@material-ui/core/Avatar';
import fimg from './assests/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg';
import simg from './assests/josephine-baran-g4wzhY8qiMw-unsplash.jpg';
import timg from './assests/nrd-D6Tu_L3chLE-unsplash.jpg';
import Cards from './Cards';
import Footer from './Footer';
import { Redirect } from 'react-router';
import { farmer, postArray } from '../../interface';
import Featured from './homepageComponents/Featured';
import { cropTypes } from './data/FakeData';
import Custom_4 from './Custom_4';

const Homepage = () => {
    // context value
    // const context = useContext(UserContext);

    // backend graphql code starts
    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: localStorage.getItem('id')
        }
    });

    const {
        data: posts_d,
        error: posts_error,
        loading: posts_loading
    } = useQuery<postArray>(ALL_POSTS, {
        variables: {
            id: localStorage.getItem('id')
        }
    });
    if (!posts_d || posts_error || posts_loading) console.log(posts_error);
    if (error_id || !data_id || loading_id) console.log(error_id);
    let cropSend = cropTypes[Math.floor(Math.random() * cropTypes.length)];
    const {
        data: f_data,
        error: f_error,
        loading: f_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'fruits'
        }
    });
    if (!f_data || f_error || f_loading) console.log(f_error);
    // backend graphql code ends
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="main-container">
            <Navbar />
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
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                }
                                alt="Los Angeles"
                            ></img>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                }
                                alt="Chicago"
                            ></img>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={
                                    'https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                }
                                alt="New York"
                            ></img>
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
            <div className="featured-container">
                {f_data?.getAllThings.map((item) => (
                    <Featured
                        url={item.url}
                        cropType={item.cropType}
                        title={item.title}
                        des={item.des}
                    />
                ))}
            </div>
            <div className="custom-container">
                <Custom_4 />
                <Featured url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/Jupiter/LearnMore/PC_01.jpg" />
                <Featured url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/Jupiter/LearnMore/PC_01.jpg" />
                <Custom_4 />
            </div>
            <div className="custom-container-1">
                <Custom_4 />
                <Featured url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/Jupiter/LearnMore/PC_01.jpg" />
                <Featured url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/Jupiter/LearnMore/PC_01.jpg" />
                <Custom_4 />
            </div>
            <Footer />
        </div>
    );
};
export default Homepage;
