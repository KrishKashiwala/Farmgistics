import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './componentsCss/homepage.css';
import './componentsCss/typestouch.css';
import TypesTouch from './TypesTouch';
import { FIND_FARMER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { farmer } from '../../interface';

const Homepage = ({ match }: any) => {
    const [getByIdFarmers, { data, error }] = useMutation<farmer>(FIND_FARMER);
    const farmerRequest = () => {
        getByIdFarmers({
            variables: {
                id: match?.params.id
            }
        });
    };
    if (error || !data) console.log(error);

    useEffect(() => {
        farmerRequest();
        console.log(data?.getByIdFarmers?.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Navbar id={match.params.id} />
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
                    alt="banner"
                />
                <div className="banner_content">
                    <h1>{data?.getByIdFarmers.name}</h1>
                    <br />
                    <h2>Fresh Fruits and spices</h2>
                    <br />
                    <h3>Sell and Earn</h3>
                    <br />
                    <a href="google.com" className="btn">
                        SHOP NOW
                    </a>
                </div>
            </div>
            <div className="section_title">
                <h1>Types</h1>
                <div className="section_icons" style={{ marginTop: '1em' }}>
                    <i
                        className="fas fa-carrot"
                        style={{ color: 'orange' }}
                    ></i>

                    <i
                        className="fas fa-apple-alt"
                        style={{ marginLeft: '1em', color: 'red' }}
                    ></i>
                    <i
                        className="fas fa-mortar-pestle"
                        style={{ marginLeft: '1em', color: 'brown' }}
                    ></i>
                </div>
            </div>
            <div className="types">
                <TypesTouch
                    className="typestouch"
                    wid="75%"
                    high="100%"
                    content="Fresh Vegetables"
                    secondContent="Best Quality"
                    imglink="https://image.freepik.com/free-photo/top-view-vegetables-fruits-bag_23-2148949707.jpg"
                />

                <TypesTouch
                    className="typestouch"
                    wid="75%"
                    high="100%"
                    content="Handpicked Fruits"
                    secondContent="Juicy Flavours"
                    imglink="https://image.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-6927.jpg"
                />

                <TypesTouch
                    className="typestouch"
                    wid="75%"
                    high="100%"
                    content="Tasty Spices"
                    secondContent="Tangy and Bulgy"
                    imglink="https://image.freepik.com/free-photo/indian-spices-collection-vintage-background_55610-2835.jpg"
                />
            </div>
        </div>
    );
};
export default Homepage;
