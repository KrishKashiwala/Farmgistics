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
                        <ul>
                            <li>
                                <a href="">
                                <HomeOutlinedIcon/>
                                Farmgistic
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <PhoneInTalkOutlinedIcon/>
                                123-456-789
                                </a>
                                
                            </li>
                            <li>
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
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Delivery</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="footer-col">
                        <h5>My Account</h5>
                        <ul>
                            <li><a href="">My Account</a></li>
                            <li><a href="">Order History</a></li>
                            <li><a href="">Wish List</a></li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
