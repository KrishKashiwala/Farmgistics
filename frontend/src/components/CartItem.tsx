import './componentsCss/cartitem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = () => {
    return (
        <div className="row carti-cont">
            <div className="col-3 img">
                <img src="https://source.unsplash.com/1600x900/?vegetables" alt="image"></img>
            </div>
            <div className="col-3 detail">
                <h6>Tomato</h6>
                <p>City : Surat</p>
                <p>Description : Fresh tomato</p>
                <p>Farmer Name : Raju</p>
            </div>
            <div className="col-2 price">
                <p>&#x20B9; 150</p>
            </div>
            <div className="col-1 qty">
                <p>32</p>
            </div>
            <div className="del">
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </div>
        </div>
    )
}

export default CartItem
