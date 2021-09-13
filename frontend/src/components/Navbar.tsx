import { useContext } from 'react';
import './componentsCss/navbar.css';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import img1 from './assests/farmgistic_logo.png'
import { Link } from 'react-router-dom';
const Navbar = ({ id }: any) => {

    return (
        <div>
            <div className="Top-bar">
                <div className="logo">
                    <img src = {img1}></img>
                </div>
                <div className="Search-bar">
                    <div className="input-group">
                        <input type='text' placeholder='Search'></input>
                        <button>Search</button>
                    </div>
                </div>
                <div className="Profile">
                    <PersonOutlineOutlined fontSize="large" style={{marginRight: '2rem'}} />
                    <ShoppingCartOutlined fontSize="large" />
                </div>
            </div>
            <div className="Nav-links">
                <ul>
                    <li>
                        <Link to=''>Home</Link>
                    </li>
                    <li>
                        <Link to='/spices'>Spices</Link>
                    </li>
                    <li>
                        <Link to='/vegetables'>Vegetables</Link>
                    </li>
                    <li>
                        <Link to='/fruits'>Fruits</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
