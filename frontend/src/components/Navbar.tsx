import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import { FIND_FARMER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { farmer } from "../../interface";
import "./componentsCss/navbar.css";
import PersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import img1 from "./assests/farmgistic_logo.png";
import { Link, Redirect, useHistory } from "react-router-dom";

const Navbar = () => {
  const context = useContext(UserContext);
  const history = useHistory();
  const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
  getByIdFarmers({
    variables: {
      id: localStorage.getItem("id"),
    },
  });

  const [search, setSearch] = useState<String>("no");
  const searcher = () => {
    if (search !== "no") {
      if (
        search === "spices" ||
        search === "s" ||
        search === "sp" ||
        search === "spi" ||
        search === "sices" ||
        search === "sip" ||
        search === "spice"
      ) {
        console.log("working");
        history.push("/spices");
      } else if (
        search === "vegetables" ||
        search === "v" ||
        search === "ve" ||
        search === "veggies" ||
        search === "veg" ||
        search === "vegetable" ||
        search === "vegitable" ||
        search === "veggie" ||
        search === "vegi"
      ) {
        history.push("/vegetables");
      }
      if (
        search === "fruits" ||
        search === "fru" ||
        search === "fruts" ||
        search === "futs" ||
        search === "fuits" ||
        search === "fruit"
      ) {
        history.push("/fruits");
      }
    }
  };

  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div>
      <div className='Top-bar'>
        <div className='logo'>
          <img src={data?.getByIdFarmers.image} alt='img'></img>
          <p>Welcome, {`${data?.getByIdFarmers.name}`}</p>
        </div>
        <div className='Search-bar'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button onClick={searcher}>Search</button>
          </div>
        </div>
        <div className='Profile'>
          <Link to='/profile'>
            <img
              style={{ width: "2em", height: "2em", borderRadius: "50%" }}
              src={data?.getByIdFarmers.image}
            />
            <p>{`${data?.getByIdFarmers.name}`}</p>
          </Link>
          <Link to='/cart'>
            <ShoppingCartOutlined fontSize='large' />
          </Link>
        </div>
      </div>
      <div className='Nav-links'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/spices'>Spices</Link>
          </li>
          <li>
            <Link to='/vegetables'>Vegetables</Link>
          </li>
          <li>
            <Link to='/fruits'>Fruits</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
