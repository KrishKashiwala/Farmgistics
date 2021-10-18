import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './componentsCss/filter.css'
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Rating from '@mui/material/Rating';

function valuetext(value) {
    return `${value}`;
}

const Filter = () => {

    const useStyles = makeStyles({
        slider: {
            color: "#17c717",
        },
    })
    const [price, setPrice] = useState(100);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    const classes = useStyles()

    return (
        <div className="row">
            <aside>
                <h5>Filters</h5>
                <hr></hr>
                <section className="rating-cont">
                    <h5>Rating</h5>
                    <div className="rating">
                        <Rating name="read-only" value={4} readOnly/>
                        <p>&#38; Up</p>
                    </div>
                    <div className="rating">
                        <Rating name="read-only" value={3} readOnly/>
                        <p>&#38; Up</p>
                    </div>
                    <div className="rating">
                        <Rating name="read-only" value={2} readOnly/>
                        <p>&#38; Up</p>
                    </div>
                    <div className="rating">
                        <Rating name="read-only" value={1} readOnly/>
                        <p>&#38; Up</p>
                    </div>
                </section>
                <hr></hr>
                <section className="price">
                    <h5>Price</h5>
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
                            <InputAdornment position="start"
                            >$</InputAdornment>
                        }
                    />
                </section>
                <hr></hr>
                <section className="name">
                    <h5>Name of Item</h5>
                    <FormControl
                    >
                        <FormGroup
                        >
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Turmaric"
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
                                label="Chilli Powder"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </section>
                <hr></hr>
                <section className="city">
                    <h5>City</h5>
                    <FormControl
                        >
                            <FormGroup
                            >
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Surat"
                                    labelPlacement="end"

                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Jamnagar"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox color="primary" />}
                                    label="Kutch"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                    </FormControl>
                </section>
                <hr></hr>
                <section className="available">
                    <h5>Availability</h5>
                    <FormControl
                    >
                        <FormGroup
                        >
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Available"
                                labelPlacement="end"

                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Not Available"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </section>
        </aside>
        </div>
    )
}

export default Filter
