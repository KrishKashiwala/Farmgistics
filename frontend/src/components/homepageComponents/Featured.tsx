// import React from 'react';
import { Box, Typography } from '@mui/material';
const Featured = ({ cropType, title, des, url }: any) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Box>
                <Typography variant="h2" component="div">
                    Top Farmer in {cropType} section
                </Typography>
            </Box>
            <Box>
                <img
                    style={{
                        margin: '3em',
                        width: '20em',
                        height: '24em'
                    }}
                    src={url}
                    alt="image"
                />
            </Box>
            <Box>
                <a href={`/${cropType}`}>See All Offers</a>
            </Box>
        </Box>
    );
};
export default Featured;
