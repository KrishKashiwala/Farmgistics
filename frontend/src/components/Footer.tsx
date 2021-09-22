
import "./componentsCss/footer.css"
import Grid from '@material-ui/core/Grid';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';


const Footer = () => {
        return (
            <div>
                <Grid container spacing={0} className="footer">
                    <Grid item xs={3}>
                        <div className="footer-col">
                            <h5>Contact Us</h5>
                            <ul className="footer-links">
                                <li className="footer-link">
                                    <a href="">
                                    <HomeOutlinedIcon/>
                                    Farmgistic
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a href="">
                                    <PhoneInTalkOutlinedIcon/>
                                    123-456-789
                                    </a>
                                    
                                </li>
                                <li className="footer-link">
                                    <a href="">
                                    <MailOutlineOutlinedIcon/>
                                    farmgistic@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="footer-col">
                            <h5>Information</h5>
                            <ul className="footer-links">
                                <li className="footer-link"><a href="">About Us</a></li>
                                <li className="footer-link"><a href="">Delivery</a></li>
                                <li className="footer-link"><a href="">Privacy Policy</a></li>
                                <li className="footer-link"><a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="footer-col">
                            <h5>My Account</h5>
                            <ul className="footer-links">
                                <li className="footer-link"><a href="">My Account</a></li>
                                <li className="footer-link"><a href="">Order History</a></li>
                                <li className="footer-link"><a href="">Wish List</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
}

export default Footer
