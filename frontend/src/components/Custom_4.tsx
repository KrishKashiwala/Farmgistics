import { Box, Typography } from '@mui/material';
import './componentsCss/custom_4.css';
const Custom_4 = () => {
    return (
        <Box className="c-container">
            <Box className="c-s-container">
                <Typography id="head">Vegetables</Typography>
                <Box className="c-s-1-container">
                    <Box className="c-s-s-1-container">
                        <a className="s_a" href="/vegetabels">
                            <Box className="c-main">
                                <img
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter2021/PC.jpg"
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
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter2021/PC.jpg"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Vegetables
                                </Typography>
                            </Box>
                        </a>
                    </Box>
                    <br />
                    <Box className="c-s-s-1-container">
                        <a className="s_a" href="">
                            <Box className="c-main">
                                <img
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter2021/PC.jpg"
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
                                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter2021/PC.jpg"
                                    alt="image"
                                />
                                <Typography className="t">
                                    Vegetables
                                </Typography>
                            </Box>
                        </a>
                    </Box>
                </Box>
                <a href="/fruits">See all deals</a>
            </Box>
        </Box>
    );
};
export default Custom_4;
