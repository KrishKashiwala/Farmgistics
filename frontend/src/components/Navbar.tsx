import './componentsCss/navbar.css';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import SimpleTabs from './Tabs'
const Navbar = ({ id }: any) => {
    return (
        <div>
            <div className="Top-bar">
                <div className="logo">
                    <img src = {require("./assests/farmgistic_logo.png")}></img>
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
};
export default Navbar;
