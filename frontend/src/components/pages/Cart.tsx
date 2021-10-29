import { Redirect, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CartItem from "../CartItem";
import '../componentsCss/cart.css';
import { cartArray, infoState, farmer } from "../../../interface";
import { CART_ITEMS, FIND_FARMER } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const Cart = () => {
  const location = useLocation()
  const data: infoState = location.state
  const {
    data: data_id,
    error: error_id,
    loading: loading_id
  } = useQuery<farmer>(FIND_FARMER, {
    variables: {
      id: localStorage.getItem("id")
    }
  });
  if (error_id) console.log(error_id)
  const { data: cart_data, error: cart_error, loading: cart_loading } = useQuery<cartArray>(CART_ITEMS, {
    variables: {
      farmerId: localStorage.getItem('id')
    }
  })
  if (!cart_data || cart_error || cart_loading) console.log(cart_error)
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div className="container-fluid">
      <Navbar />
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
      <div>
      {cart_data?.getCartItems?.map(item => (
        <CartItem
          name={item?.name}
          rate={item?.rate}
          description={item?.description}
          photo={item?.photo}
          quantity={item?.quantity}
          city={item?.city}
        />
      ))}
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Cart;
