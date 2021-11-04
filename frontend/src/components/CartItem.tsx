import './componentsCss/cartitem.css';
import { useLazyQuery, useQuery } from '@apollo/client';
import { DELETE_CART_ITEM } from '../graphql/queries';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
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
    const [postBool, setPostBool] = useState(false)
    return (
        <div className="row carti-cont">
            <div className="col-3 img">
                <img src={photo} alt="image"></img>
            </div>
            <div className="col-3 detail">
                <h6>{name}</h6>
                <p>City : {city}</p>
                <p>Description : {description}</p>
            </div>
            <div className="col-2 price">
                <p>&#x20B9; {rate}</p>
            </div>
            <div className="col-1 qty">
                <p>{quantity}</p>
            </div>
            <div className="deleteButtonDiv">
                <a href="#myModal" className="deleteButtonCart" onClick={() => setPostBool(true)} role="button" data-bs-toggle="modal"><i className="fas fa-trash-alt"></i></a>
            </div>
            {postBool && <DeleteModal
                id={id}
                title={name}
                setPostBool={setPostBool}
            />}
        </div>
    )
}

export default CartItem
