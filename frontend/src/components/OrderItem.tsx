import { Redirect } from 'react-router-dom';

const OrderItem = ({ title, des, url, price, city }: any) => {

    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="card">
            <img className="card-img-top" src={url} alt="Card image"></img>
            <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">Description : {des}</p>
            <p className="card-text">Price : &#8377; {price}</p>
            <p className="card-text">City : {city}</p>
            </div>
        </div>
    ); 
};
export default OrderItem;
