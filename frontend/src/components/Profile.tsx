import "./componentsCss/profile.css";
import "./componentsCss/orderItem.css";
import {
  makeStyles,
  createStyles,
  Theme,
  Fab,
  Tooltip,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { FIND_FARMER, FIND_FARMER_POST } from "../graphql/mutations";
import Navbar from "./Navbar";
import OrderItem from "./OrderItem";
import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import Registerpost from "./Registerpost";
import AddIcon from "@material-ui/icons/Add";
import { farmer, allOrders } from "../../interface";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: "10em",
      height: "10em",
    },
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  })
);
const Profile = () => {
  const context = useContext(UserContext);
  const [postBool, setPostBool] = useState<Boolean>(false);
  const classes = useStyles();
  const [getByIdFarmers] = useMutation<farmer>(FIND_FARMER);
  const firstProfileLoader = () => {
    getByIdFarmers({
      variables: {
        id: context.Id,
      },
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [getAllFarmers, { data, error }] =
    useMutation<allOrders>(FIND_FARMER_POST);
  const firstOrders = () => {
    getAllFarmers({
      variables: {
        farmerId: context.Id,
      },
    });
  };

  React.useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) console.log("no token");
    firstProfileLoader();
    firstOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className='root'>
        <br />
        <div className='lower-container'>
          {data?.getAllFarmers.map((item) => (
            <OrderItem
              val={`${context.Id}`}
              url={item.url}
              title={item.title}
              des={item.des}
              price={item.price}
              city={item.city}
            />
          ))}
        </div>
      </div>
      <Tooltip title='Add Crop'>
        <Fab
          color='secondary'
          onClick={() => setPostBool(true)}
          className={classes.absolute}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Registerpost val={`${context.Id}`} postBool={postBool} />
    </div>
  );
};
export default Profile;
