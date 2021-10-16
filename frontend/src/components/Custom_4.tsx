import { Box, Typography } from '@mui/material';
import './componentsCss/custom_4.css';
const Custom_4 = ({ head }) => {
    return (
        <Box className="c-container">
            <Box className="c-s-container">
                <Typography id="head">{head}</Typography>
                <Box className="c-s-1-container">
                    <Box className="c-s-s-1-container">
                        <a className="s_a" href="/vegetabels">
                            <Box className="c-main">
                                <img
                                    src="https://source.unsplash.com/1600x900/?vegetables"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Vegetables
                                </Typography>
                            </Box>
                        </a>
                        <a className="s_a" href="">
                            <Box className="c-main">
                                <img
                                    src="https://source.unsplash.com/1600x900/?fruits"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Fruits
                                </Typography>
                            </Box>
                        </a>
                    </Box>
                    <br />
                    <Box className="c-s-s-1-container">
                        <a className="s_a" href="">
                            <Box className="c-main">
                                <img
                                    src="https://images.unsplash.com/photo-1575319026763-726d092c26c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Spices
                                </Typography>
                            </Box>
                        </a>
                        <a className="s_a" href="">
                            <Box className="c-main">
                                <img
                                    src="https://images.unsplash.com/photo-1600190909161-44abaa7d45f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Pulses
                                </Typography>
                            </Box>
                        </a>
                    </Box>
                </Box>
                <a href="/fruits" className="seedeals">See all deals</a>
            </Box>
        </Box>
    );
};
export default Custom_4;
