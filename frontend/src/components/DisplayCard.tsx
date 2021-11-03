
import { useQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { farmer, postById } from '../../interface';
import { FIND_FARMER, GET_POST } from '../graphql/queries';
const Card = ({ farmerId, id }: any) => {
    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: farmerId
        }
    });
    const { data: post_id, error: post_error, loading: post_loading } = useQuery<postById>(GET_POST, {
        variables: {
            id: id
        }
    })
    if (error_id || !data_id || loading_id) console.log(error_id)
    if (post_error || !post_id || post_loading) console.log(post_loading)
    return (
        <div>
            <div className="vege-item">
                <img src={post_id?.getPostById.url} alt="img"></img>
                <div className="details">
                    <h5>title : {post_id?.getPostById.title}</h5>
                    <p>From : {data_id?.getByIdFarmers.name}</p>
                    <p>Price : &#8377;{post_id?.getPostById.price}</p>
                    <Link to={`/product/${post_id?.getPostById.cropType}/${id}`}>
                        <Button variant="contained" disableElevation>Buy Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
