import Navbar from './Navbar';
import './componentsCss/homepage.css';
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
        </div>
    );
};
export default Homepage;
