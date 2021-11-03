import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useQuery } from '@apollo/client';
import { ALL_THINGS } from '../../graphql/queries';
import '../componentsCss/spices.css';
import Filter from '../Filter';
import Cards from '../Items';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { postArray } from '../../../interface';

import { makeStyles } from '@material-ui/core/styles';
function valuetext(value) {
    return `${value}`;
}

const Fruits = () => {

    const {
        data: fruit_data,
        error: fruit_error,
        loading: fruit_loading
    } = useQuery<postArray>(ALL_THINGS, {
        variables: {
            cropType: 'vegetables'
        }
    });

    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row">
                <div className="col-3">
                    <Filter />
                </div>
                <div className="col-9">
                    <div className="spices-heading">
                        <h4>Vegetable We Offer</h4>
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
                                cropType='vegetables'
                                id={item.id}
                                city={item.city}
                                farmerId={item.farmerId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Fruits;
