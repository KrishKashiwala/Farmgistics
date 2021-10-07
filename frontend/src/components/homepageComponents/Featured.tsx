// import React from 'react';
import { Box, Typography } from '@mui/material';
import '../componentsCss/featured.css';
const Featured = ({ cropType, title, des, url }: any) => {
    return (
        <Box className="f-container">
            <Box className="s-container">
                <Box className="s-s-1-container">
                    <Typography variant="h4" component="div">
                        Top Farmer in {cropType} section
                    </Typography>
                    <img src={url} alt="image" />
                    <a href={`/${cropType}`}>See All Offers</a>
                </Box>
            </Box>
        </Box>
    );
};
export default Featured;
