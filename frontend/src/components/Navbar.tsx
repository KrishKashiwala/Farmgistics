import { Link, Avatar } from '@material-ui/core';
import farmgistic_logo from './assests/farmgistic_logo.png';
import './componentsCss/homepage.css';
const Navbar = () => {
    return (
        <div className="nav_body">
            <img src={farmgistic_logo} alt="logo" />
            <div className="nav_options">
                <div className="dropdown">
                    <Link className="dropbtn">
                        Category <i className="fa fa-chevron-down down"></i>
                    </Link>
                    <div className="dropdown-content">
                        <a href="google.com">Vegetables</a>
                        <a href="google.com">Fruits</a>
                        <a href="google.com">Spices</a>
                    </div>
                </div>
                {/* <div className="dropdown">
                    <Link className="dropbtn">
                        Category <i className="fa fa-chevron-down down"></i>
                    </Link>
                    <div className="dropdown-content">
                        <a href="google.com">Vegetables</a>
                        <a href="google.com">Fruits</a>
                        <a href="google.com">Spices</a>
                    </div>
                </div> */}
                <a href="google.com" className="nav_a">
                    Contact Us
                </a>
                <a href="google.com" className="nav_a">
                    About Us
                </a>
            </div>
            <div className="nav_icon">
                <div className="input-group rounded search">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="search query"
                    />
                    <i className="fa fa-search font"></i>
                    {/* <i className="fas fa-shopping-bag"></i> */}
                </div>
                <i className="fas fa-shopping-bag font"></i>
                <i className="fa fa-cog font"></i>
                <Avatar alt="profile_pic" src={farmgistic_logo} />
            </div>
        </div>
    );
};
export default Navbar;
