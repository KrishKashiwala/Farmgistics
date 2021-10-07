import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { Redirect } from "react-router-dom";

const Cart = () => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <h1>This Cart</h1>
    </div>
  );
};

export default Cart;
