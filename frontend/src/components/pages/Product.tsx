import { Redirect, useLocation } from "react-router";
import { useState } from "react";
import "../componentsCss/product.css";
import vege from "../assests/vegetable.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { infoState } from "../../../interface";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CART_POST } from '../../graphql/mutations'

const Product = () => {
  const location = useLocation()
  const data: infoState = location.state

  console.log(data);
  console.log(data?.info.city)
  const [weight, setWeight] = useState(0);

  const handleChange = (e) => {
    setWeight(e.target.value);
  }

  let itemData: { [k: string]: any } = {};
  itemData.description = data?.info.description;
  itemData.name = data?.info.name;
  itemData.rate = data?.info.rate;
  itemData.photo = data?.info.photo;
  itemData.city = data?.info.city;
  itemData.farmerName = data?.info.farmerName
  itemData.quantity = data?.info.quantity;

  const [cartItems] = useMutation(CART_POST)

  const sendCartData = () => {
    cartItems({
      variables: {
        description: data?.info.description,
        name: data?.info.name,
        rate: data?.info.rate,
        photo: data?.info.photo,
        city: data?.info.city,
        farmerName: data?.info.farmerName,
        quantity: data?.info.quantity
      }
    })
  }
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div className="container-fluid">
      <Navbar />
      <div className='row product-info'>
        <div className='col-4 product-img'>
          <img src={data?.info.photo} alt='Girl' />
        </div>
        <div className='col product-details'>
          <h4>Tomato</h4>
          <hr></hr>
          <p>Farmer : {data?.info.farmerName}</p>
          <p>
            Description : {data?.info.description}
          </p>
          <p>
            Location :  <i className="fa fa-map-marker"></i> &nbsp;{data?.info.city}
          </p>
          <hr></hr>
          <h5>Rate :  &#x20B9; {data?.info.rate}/Kg</h5>
          <hr></hr>
          <div className='quantity-selector'>
            <p>Quantity</p>
            <FormControl variant="standard" sx={{ width: '10ch' }}>
              <Input
                id="standard-adornment-weight"
                value={data?.info.quantity}
                onChange={(e) => handleChange(e)}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              />
            </FormControl>
          </div>
          <hr></hr>
          <button onClick={sendCartData}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;


