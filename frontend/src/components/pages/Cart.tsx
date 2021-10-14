import { Redirect } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Cart = () => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <Navbar/>

      <div className="row">
        <div className="col">
          <h4>Items</h4>
        </div>
        <div className="col">
          <h4>Details</h4>
        </div>
        <div className="col">
          <h4>Price</h4>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Cart;
