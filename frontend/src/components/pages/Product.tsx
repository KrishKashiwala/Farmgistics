import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { Redirect } from "react-router";
import "../componentsCss/product.css";
import vege from "../assests/vegetable.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";

// import ImageZoom from "js-image-zoom";

const Product = () => {
  // const context = useContext(UserContext);

  // if (context.Id === null) {
  //   return <Redirect to='/not-found' />;
  // }
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <Navbar />
      <div className='product-info'>
        <div className='product-img'>
          <img id='myimage' src={vege} width='300' height='240' alt='Girl' />
          <div id='myresult' className='img-zoom-result'></div>
        </div>
        <div className='product-details'>
          <h4>Tomato</h4>
          <hr></hr>
          <p>Farmer : Rakesh</p>
          <p>
            Address : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <hr></hr>
          <h4>$75/Kg</h4>
          <hr></hr>
          <div className='quantity-selector'>
            <p>Quantity</p>
            <input type='text'></input>
          </div>
          <hr></hr>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
