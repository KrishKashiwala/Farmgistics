
import Button from '@mui/material/Button';

const Card = () => {
    return (
        <div>
            <div className="vege-item">
                <img src="" alt="img"></img>
                <div className="details">
                    <h5>title</h5>
                    <p>From : Raju</p>
                    <p>Price : &#8377;</p>
                    <Button variant="contained" disableElevation>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Card
