import Navbar from './Navbar';
import './componentsCss/homepage.css';
import { Typography } from '@material-ui/core';
import TypesTouch from './TypesTouch';
const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
                    alt="banner"
                />
                <div className="banner_content">
                    <h1>New! Vegetables</h1>
                    <br />
                    <h2>Fresh Fruits and spices</h2>
                    <br />
                    <h3>Sell and Earn</h3>
                    <br />
                    <a href="google.com" className="btn">
                        SHOP NOW
                    </a>
                </div>
            </div>
            <div className = "section_title">
                <h1>Types</h1>
                <i className="fas fa-carrot"></i>
            </div>
            <div className="types">
                <div>
                    <TypesTouch
                        className="typestouch"
                        wid="75%"
                        high="100%"
                        imglink="https://image.freepik.com/free-photo/top-view-vegetables-fruits-bag_23-2148949707.jpg"
                    />
                </div>

                <div>
                    <TypesTouch
                        className="typestouch"
                        wid="75%"
                        high="100%"
                        imglink="https://image.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-6927.jpg"
                    />
                </div>
                <div>
                    <TypesTouch
                        className="typestouch"
                        wid="75%"
                        high="100%"
                        imglink="https://image.freepik.com/free-photo/indian-spices-collection-vintage-background_55610-2835.jpg"
                    />
                </div>
            </div>
        </div>
    );
};
export default Homepage;
