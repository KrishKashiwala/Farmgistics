import farmgistic_logo from './assests/farmgistic_logo.png';
import { useMutation } from '@apollo/client';
import { FIND_FARMER_POST } from '../graphql/mutations';
import React, { useEffect } from 'react';
interface order {
    getPostByFarmer: {
        title?: String;
        des?: String;
    };
}
const OrderItem = ({ val }: any) => {
    const [getPostByFarmer, { data, error }] =
        useMutation<order>(FIND_FARMER_POST);
    const firstOrders = () => {
        getPostByFarmer({
            variables: {
                id: val
            }
        });
    };
    if (error || !data) console.log(error);
    useEffect(() => {
        firstOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="root">
            <img src={farmgistic_logo} alt="order pic"></img>
            <div className="right-container">
                <h3>{data?.getPostByFarmer.title}</h3>
            </div>
        </div>
    );
};
export default OrderItem;
