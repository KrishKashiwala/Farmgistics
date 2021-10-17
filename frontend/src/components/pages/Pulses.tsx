import { Redirect } from 'react-router';
import { useQuery } from '@apollo/client';
import { ALL_THINGS } from '../../graphql/queries';
import '../componentsCss/spices.css';
import Filter from '../Filter';
import FormControl from '@material-ui/core/FormControl';
import Cards from '../Items';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { postArray } from '../../../interface';

const Pulses = () => {

    const {
        data: fruit_data,
        error: fruit_error,
        loading: fruit_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'pulses'
        }
    });

    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <div className="col-3">
                    <Filter/>
                </div>
                <div className="col-9">
                        <div className="spices-heading">
                            <h4>Pulses We Offer</h4>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5>Items</h5>
                            </div>
                            <div className="col">
                                <h5>Details</h5>
                            </div>
                            <div className="col">
                                <h5>Price</h5>
                            </div>
                            <div className="col">
                                <h5>Quantity</h5>
                            </div>
                        </div>
                        <div className="spices-Items">
                        {fruit_data?.getAllThings.map((item) => (
                            <Cards
                                title={item.title}
                                des={item.des}
                                url={item.url}
                                price={item.price}
                                city={item.city}
                            />
                        ))}
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pulses
