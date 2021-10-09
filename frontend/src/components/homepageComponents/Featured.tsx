import { Box, Typography } from '@mui/material';
import '../componentsCss/featured.css';
const Featured = ({ cropType, title, des, url }: any) => {
    return (
        <Box className="f-container">
            <Box className="s-container">
                <Typography id="typo">
                    Top Farmer in {cropType} section
                </Typography>
                <Box className="s-s-1-container">
                    <img src={url} alt="image" />
                </Box>
                <a id="a" href={`/${cropType}`}>
                    See All Offers
                </a>
            </Box>
        </Box>
    );
};
export default Featured;
