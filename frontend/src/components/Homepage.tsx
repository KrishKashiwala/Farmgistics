import * as React from 'react';
import './componentsCss/homepage.css';
import { ALL_THINGS, FIND_FARMER, POST_BY_FARMER, GET_FARMER_BY_FARMERID, GET_RANDOM_POST } from '../graphql/queries';
import { ALL_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import Navbar from './Navbar';
import DisplayCard from './DisplayCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { Redirect } from 'react-router';
import { farmer, postArray, farmerByFarmerId, order } from '../../interface';
import Featured from './homepageComponents/Featured';
import { cropTypes } from './data/FakeData';
import Custom_4 from './Custom_4';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Homepage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // backend graphql code starts
    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: localStorage.getItem('id')
        }
    });
    const {
        data: posts_d,
        error: posts_error,
        loading: posts_loading
    } = useQuery<postArray>(ALL_POSTS, {
        variables: {
            id: localStorage.getItem('id')
        }
    });

    // farmer based on farmerId query
    // const {
    //     data: fdata_id,
    //     error: ferror_id,
    //     loading: floading_id
    // } = useQuery<farmer>(POST_BY_FARMER,{
    //     variables:{
    //         farmerId : farmerId
    //     }
    // });


    // latest   vegetables query
    const {
        data: vegetables_data,
        error: vegetables_error,
        loading: vegetables_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'vegetables'
        }
    });

    // latest   vegetables query
    const {
        data: fruits_data,
        error: fruits_error,
        loading: fruits_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'fruits'
        }
    });
    // latest   spices query
    const {
        data: spices_data,
        error: spices_error,
        loading: spices_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'spices'
        }
    });
    // latest   pulses query
    const {
        data: pulses_data,
        error: pulses_error,
        loading: pulses_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'pulses'
        }
    });

    if (!posts_d || posts_error || posts_loading) console.log(posts_error);
    if (error_id || !data_id || loading_id) console.log(error_id);
    const {
        data: f_data,
        error: f_error,
        loading: f_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'fruits'
        }
    });
    if (!f_data || f_error || f_loading) console.log(f_error);

    const {
        data: r_data,
        error: r_error,
        loading: r_loading
    } = useQuery<order>(GET_RANDOM_POST);


    console.log(r_data)

    if (!r_data || r_error || r_loading) console.log(r_error);
    // backend graphql code ends
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="main-container">
            <Navbar />
            <div className="container-fluid">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
            <br></br>
            <div className="latest-arrivals">
                <h3>Latest Arrivals</h3>
                <hr></hr>
            </div>
            <br></br>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Vegetables" {...a11yProps(0)} />
                        <Tab label="Fruits" {...a11yProps(1)} />
                        <Tab label="Spices" {...a11yProps(2)} />
                        <Tab label="Pulses" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} className="tb-panel">
                    <div className="vege-items">
                        {vegetables_data?.getAllThings.map((item) => (
                            <DisplayCard url={item.url} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} className="tb-panel">
                    <div className="vege-items">
                        {fruits_data?.getAllThings.map((item) => (
                            <DisplayCard url={item.url} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} className="tb-panel">
                    <div className="vege-items">
                        {spices_data?.getAllThings.map((item) => (
                            <DisplayCard url={item.url} />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel value={value} index={3} className="tb-panel">
                    <div className="vege-items">

                        {pulses_data?.getAllThings.map((item) => (
                            <DisplayCard url={item.url} />
                        ))}

                    </div>
                </TabPanel>

            </Box>
            <div className="custom-container-1">
                <Custom_4 head="free delivery available" />
                <Featured url="https://source.unsplash.com/1600x900/?Spices" />
                <Featured url="https://source.unsplash.com/1600x900/?Pulses,dal" />
                <Custom_4 head="best in town" />
            </div>
            <br /><br />
            <div className="container-fluid">
                <div id="img-slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="items">
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="items">
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="items">
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                                <div className="item">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image"></img>
                                    <p>Price : &#8377; 100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#img-slider" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#img-slider" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            <br></br>
            <div className="custom-container-1">
                <Custom_4 head="Upto 20% discount" />
                <Featured
                    cropType={r_data?.getRandomPost.cropType}
                    url={r_data?.getRandomPost.url}
                />
                <Featured url="https://source.unsplash.com/1600x900/?Pulses,dal" />
                <Custom_4 head="Upto 80% discount" />
            </div>
            <Footer />
        </div>
    );
};
export default Homepage;