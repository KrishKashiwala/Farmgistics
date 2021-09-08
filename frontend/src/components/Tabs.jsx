import "./componentsCss/tabs.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs>
          <NavLink to="/home/61233f44cf99a52c5f4132a5">
            <Tab label="Home"></Tab>
          </NavLink>
          <NavLink to="/spices">
            <Tab label="Spices"></Tab>
          </NavLink>
          <NavLink to="/fruits">
            <Tab label="Fruits"></Tab>
          </NavLink>
          <NavLink to="/vegetables">
            <Tab label="Vegetables"></Tab>
          </NavLink>
          <NavLink to="/contactus">
            <Tab label="Contact Us"></Tab>
          </NavLink>
        </Tabs>
      </AppBar>
    </div>
  );
}
