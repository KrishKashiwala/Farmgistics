import { useState } from 'react'

const Product = () => { 
    return (
        <div>
            <div className="product-info">
                <div className="product-img">
                    <img></img>
                </div>
                <div className="product-details">
                    <h4>Tomato</h4>
                    <hr></hr>
                    <p>Farmer : Rakesh</p>
                    <p>Address : Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr></hr>
                    <h4>$75/Kg</h4>
                    <hr></hr>
                    <div className="quantity-selector">
                        <p>Quantity</p>
                        <input type="text"></input>
                    </div>
                    <hr></hr>
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product
