import React, { useState } from 'react';
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
    const [city, setCity] = useState<string>('')
    const handleChange = (event, newValue) => {
        setPrice(newValue);
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}

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
            </aside>
        </div>
    )
}

export default Filter
