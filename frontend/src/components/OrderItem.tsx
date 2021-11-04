import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { postById } from '../../interface';
import { DELETE_POST_ITEM, GET_POST } from '../graphql/queries';
import './componentsCss/orderItem.css';
import DeleteModal from './DeleteModal';
const OrderItem = ({ id }: any) => {
    const { data: post_data, error: post_error, loading: post_loading } = useQuery<postById>(GET_POST, {
        variables: {
            id: id
        }
    })
    console.log(post_data)
    const [postBool, setPostBool] = useState(false)
    if (post_error || post_loading) console.log(post_error)
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="card">
            <Link to={`/product/${post_data?.getPostById.cropType}/${post_data?.getPostById.id}`}>
                <img className="card-img-top" src={post_data?.getPostById.url} alt="Card image"></img>
                <div className="order-item-container">
                    <div className="card-body">
                        <h4 className="card-title">{post_data?.getPostById.title}</h4>
                        <p className="card-text">Description : {post_data?.getPostById.des}</p>
                        <p className="card-text">Price : &#8377; {post_data?.getPostById.price}</p>
                        <p className="card-text">City : {post_data?.getPostById.city}</p>
                    </div>
                    <div className="deleteButtonDiv">
                        <a href="#myModal" className="deleteButton" onClick={() => setPostBool(true)} role="button" data-bs-toggle="modal"><i className="fas fa-trash-alt"></i></a>
                    </div>
                    {postBool && <DeleteModal
                        id={post_data?.getPostById.id}
                        title={post_data?.getPostById.title}
                        setPostBool={setPostBool}
                    />}
                </div>
            </Link>
        </div>
    );
};
export default OrderItem;
