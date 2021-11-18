import React, { useState, useContext } from 'react';
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
import { SettingsAccessibility } from '@mui/icons-material';
import { FilterValue } from '../components/Context'

function valuetext(value) {
    return `${value}`;
}

const Filter = () => {

    const value = useContext(FilterValue)
    const useStyles = makeStyles({
        slider: {
            color: "#17c717",
        },
    })
    const [price, setPrice] = useState(0);
    const [city, setCity] = useState('')
    const handleCity = (event, newValue) => {
        setCity(newValue);
        value.changeValue({ city, price })
    };
    const handlePrice = (event, newValue) => {
        setPrice(newValue);
        value.changeValue({ city, price })
    };

    const classes = useStyles()


    return (
        <div className="row filter">
            <aside>
                <h5>Filters</h5>
                <hr></hr>
                <section className="price">
                    <h5>Price</h5>
                    <Slider
                        value={price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePrice(e, e.target.value)}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        className={classes.slider}
                    />
                    <Input
                        id="standard-adornment-amount"
                        value={price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePrice(e, e.target.value)}
                        startAdornment={
                            <InputAdornment position="start"
                            >$</InputAdornment>
                        }
                    />
                </section>
                <hr></hr>
                <section className="city">
                    <h5>City</h5>
                    <FormControl
                    >
                        <FormGroup
                        >
                            <FormControlLabel
                                value="Surat"
                                control={<Checkbox color="primary" />}
                                label="Surat"
                                labelPlacement="end"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCity(e, e.target.value)}

                            />
                            <FormControlLabel
                                value="Ahemdabad"
                                control={<Checkbox color="primary" />}
                                label="Ahemdabad"
                                labelPlacement="end"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCity(e, e.target.value)}
                            />
                            <FormControlLabel
                                value="Vadodara"
                                control={<Checkbox color="primary" />}
                                label="Vadodara"
                                labelPlacement="end"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCity(e, e.target.value)}
                            />
                            <FormControlLabel
                                value="Nadiad"
                                control={<Checkbox color="primary" />}
                                label="Nadiad"
                                labelPlacement="end"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCity(e, e.target.value)}
                            />
                            <FormControlLabel
                                value="Kheda"
                                control={<Checkbox color="primary" />}
                                label="Kheda"
                                labelPlacement="end"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCity(e, e.target.value)}
                            />
                        </FormGroup>
                    </FormControl>
                </section>
            </aside>
        </div>
    )
}

export default Filter
