import { useContext, useEffect } from 'react';
import UserContext from '../Context/UserContext'
import { FIND_FARMER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { farmer } from '../../interface';
import './componentsCss/navbar.css';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import img1 from './assests/farmgistic_logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const context = useContext(UserContext);
    console.log(context);

    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER)
    getByIdFarmers({
        variables: {
            id: context.Id
        }
    });
    if (error || !data) console.log(error);

    return (
        <div>
            <div className="Top-bar">
                <div className="logo">
                    <img src = {img1}></img>
                    <p>Welcome, {`${data?.getByIdFarmers.name}`}</p>
                </div>
                <div className="Search-bar">
                    <div className="input-group">
                        <input type='text' placeholder='Search'></input>
                        <button>Search</button>
                    </div>
                </div>
                <div className="Profile">
                    <Link to={`/home/${context.Id}`}>
                        <PersonOutlineOutlined fontSize="large" style={{marginRight: '2rem'}} />
                        <p>{`${data?.getByIdFarmers.name}`}</p>
                    </Link>
                    <Link to='/cart'>
                        <ShoppingCartOutlined fontSize="large" />
                    </Link>
                </div>
            </div>
            <div className="Nav-links">
                <ul>
                    <li>
                        <Link to={`/home/${context.Id}`}>Home</Link>
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
