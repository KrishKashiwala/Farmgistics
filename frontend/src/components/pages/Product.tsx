import { Redirect, useHistory, useLocation } from "react-router";
import { useState } from "react";
import "../componentsCss/product.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { farmer, infoState, postById } from "../../../interface";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CART_POST } from '../../graphql/mutations'
import { FIND_FARMER, GET_POST } from "../../graphql/queries";

const Product = ({ match }: any) => {
  const [weight, setWeight] = useState(0);
  const handleChange = (e) => {
    setWeight(e.target.value);
  }


  const [cartItems] = useMutation(CART_POST)

  const { data: post_id, error: post_error, loading: post_loading } = useQuery<postById>(GET_POST, {
    variables: {
      id: match.params.id
    }
  })
  if (post_error || !post_id || post_loading) console.log(post_error)


  const {
    data: data_id,
    error: error_id,
    loading: loading_id
  } = useQuery<farmer>(FIND_FARMER, {
    variables: {
      id: post_id?.getPostById.farmerId
    }
  });
  if (!data_id || error_id || loading_id) console.log(error_id)

  const sendCartData = () => {
    cartItems({
      variables: {
        name: post_id?.getPostById.title,
        city: post_id?.getPostById.city,
        description: post_id?.getPostById.des,
        photo: post_id?.getPostById.url,
        rate: post_id?.getPostById.price,
        farmerId: post_id?.getPostById.farmerId
      }
    })
  }
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div className="container-fluid">
      <Navbar />
      <div className='row product-info'>
        <div className='col-4 product-img'>
          <img src={post_id?.getPostById.url} alt='Girl' />
        </div>
        <div className='col product-details'>
          <h4>{post_id?.getPostById.title}</h4>
          <hr></hr>
          <p>Farmer : {data_id?.getByIdFarmers.name}</p>
          <p>
            Description : {post_id?.getPostById.des}
          </p>
          <p>
            Location :  <i className="fa fa-map-marker"></i> &nbsp;{post_id?.getPostById.city}
          </p>
          <hr></hr>
          <h5>Rate :  &#x20B9; {post_id?.getPostById.price}/Kg</h5>
          <hr></hr>
          <div className='quantity-selector'>
            <p>Quantity</p>
            <FormControl variant="standard" sx={{ width: '10ch' }}>
              <Input
                id="standard-adornment-weight"
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


