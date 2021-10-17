import { Redirect } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CartItem from "../CartItem";
import '../componentsCss/cart.css';

const Cart = () => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <Navbar/>

      <div className="row cart-cont">
        <div className="col-3 items">
          <h5>Items</h5>
        </div>
        <div className="col-3">
          <h5>Details</h5>
        </div>
        <div className="col-2">
          <h5>Price</h5>
        </div>
        <div className="col-1">
          <h5>Quantity</h5>
        </div>
      </div>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Cart;
