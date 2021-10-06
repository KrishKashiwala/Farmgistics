import { useState, useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/client';
import { ALL_FRUITS } from '../../graphql/queries';
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

function valuetext(value) {
    return `${value}`;
}

const Fruits = () => {
    const [price, setPrice] = useState(100);
    // const context = useContext(UserContext);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    // if (context.Id === null) {
    //     return <Redirect to="/" />;
    // }

    const {
        data: fruit_data,
        error: fruit_error,
        loading: fruit_loading
    } = useQuery<postArray>(ALL_FRUITS, {
        variables: {
            cropType: 'fruits'
        }
    });

    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div>
            <Navbar />
            <aside>
                <h5>Filters</h5>
                <hr></hr>
                <section className="price">
                    <h6>PRICE</h6>
                    <Slider
                        value={price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        className="slider"
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
                    <h6>FRUITS</h6>
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
            <div className="spices-heading">
                <h4>Fruits We Offer</h4>
                <hr></hr>
            </div>
            <div className="spices-cards">
                {fruit_data?.getAllFruits.map((item) => (
                    <Cards
                        title={item.title}
                        des={item.des}
                        url={item.url}
                        price={item.price}
                        city={item.city}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Fruits;
