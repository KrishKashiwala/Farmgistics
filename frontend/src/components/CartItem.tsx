import './componentsCss/cartitem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLazyQuery, useQuery } from '@apollo/client';
import { DELETE_CART_ITEM } from '../graphql/queries';
const CartItem = ({ name, rate, id, description, city, photo, quantity }) => {
    const [deleteCartItems, { error, loading }] = useLazyQuery(DELETE_CART_ITEM)
    const deleteCartItem = () => {
        deleteCartItems({
            variables: {
                id: id
            }
        })
    }
    if (error || loading) console.log(error)
    return (
        <div className="row carti-cont">
            <div className="col-3 img">
                <img src={photo} alt="image"></img>
            </div>
            <div className="col-3 detail">
                <h6>{name}</h6>
                <p>City : {city}</p>
                <p>Description : {description}</p>
                {/* <p>Farmer Name : {farmerName}</p> */}
            </div>
            <div className="col-2 price">
                <p>&#x20B9; {rate}</p>
            </div>
            <div className="col-1 qty">
                <p>{quantity}</p>
            </div>
            <div className="del">
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon onClick={() => deleteCartItem()} fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem
