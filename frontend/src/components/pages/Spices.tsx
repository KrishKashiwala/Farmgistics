import { useState } from 'react'
import '../componentsCss/spices.css'
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


function valuetext(value) {
    return `${value}`;
  }

const Spices = () => {
    const [price, setPrice] = useState(100);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <div>
            <Navbar/>
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
                        onChange={e => handleChange(e ,e.target.value)}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </section>
                <hr></hr>
                <section className="spices">
                    <h6>SPICES</h6>
                    <FormControl>
                        <FormGroup>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Termaric"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Clove"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Chili Powder"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </section>
            </aside>
            <div className="spices-heading">
                <h4>Spices We Offer</h4>
                <hr></hr>
            </div>
            <div className="spices-cards">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}

export default Spices
