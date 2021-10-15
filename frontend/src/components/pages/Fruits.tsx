import { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/client';
import { ALL_THINGS } from '../../graphql/queries';
import '../componentsCss/spices.css';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { postArray } from '../../../interface';
import { makeStyles } from '@material-ui/core/styles';

function valuetext(value) {
    return `${value}`;
}

const Fruits = () => {
    const useStyles = makeStyles({
        slider: {
            color: "#17c717",
        },
    })
    const [price, setPrice] = useState(100);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const {
        data: fruit_data,
        error: fruit_error,
        loading: fruit_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'fruits'
        }
    });
    const classes = useStyles()
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div>
            <Navbar />
            <div className="spices-cont">
                <aside>
                    <h5>Filters</h5>
                    <hr></hr>
                    <section className="price">
                        <h5>PRICE</h5>
                        <Slider
                            value={price}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            className={classes.slider}
                        />
                        <Input
                            id="standard-adornment-amount"
                            value={price}
                            onChange={(e) => handleChange(e, e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">$</InputAdornment>
                            }
                        />
                    </section>
                    <hr></hr>
                    <section className="spices">
                        <h5>FRUITS</h5>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Apple"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Banana"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Pineapple"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </section>
                </aside>
                <div className="spices-data">
                    <div className="spices-heading">
                        <h4>Fruits We Offer</h4>
                        <hr></hr>
                    </div>
                    <div className="titles">
                        <div className="items">
                            <h5>Items</h5>
                        </div>
                        <div className="price">
                            <h5>Price</h5>
                        </div>
                        <div className="quantity">
                            <h5>Quantity</h5>
                        </div>
                    </div>
                    <div className="spices-cards">
                        {fruit_data?.getAllThings.map((item) => (
                            <Cards
                                title={item.title}
                                des={item.des}
                                url={item.url}
                                price={item.price}
                                city={item.city}
                                farmerId={item.farmerId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Fruits;
