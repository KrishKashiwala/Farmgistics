import { useContext } from 'react';
import './componentsCss/navbar.css';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import SimpleTabs from './Tabs'
import UserContext from '../Context/UserContext';
import img1 from './assests/farmgistic_logo.png'
const Navbar = ({ id }: any) => {

    const context = useContext(UserContext);
    const userId = localStorage.getItem('ids');

    if(context.Id || userId){
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
                <SimpleTabs/>
            </div>
        );
    }
    else{
        return(
            <></>
        );
    }
};
export default Navbar;
