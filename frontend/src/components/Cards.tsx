import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './componentsCss/cards.css';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useQuery } from '@apollo/client';
import { FIND_FARMER } from '../graphql/queries';
import { farmer } from '../../interface';
const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    media: {
        height: 150
    },
    large: {
        width: 50,
        height: 50
    }
});

const Cards = ({ des, title, price, url, city, farmerId }: any) => {
    const classes = useStyles();

    const [qty, setQty] = useState(0);

    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: farmerId
        }
    });
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div className="row mb-4 cont">
            <div className="pd-3 info">
                <Link to={{
                    pathname: '/product',
                    state: { quantity: qty },
                }}>
                    <img src={url} alt="Image" />
                    <div className="crop-details">
                        <h5>{title}</h5>
                        <p>City : {city}</p>
                        <p>Description : {des}</p>
                        <p>Farmer Name : {data_id?.getByIdFarmers.name}</p>
                        <p>Location : <i className="fa fa-map-marker"></i> {city}</p>
                    </div>
                </Link>
            </div>
            <div className="pd-3">
                <p>&#x20B9; {price}</p>
            </div>
            <div className="pd-3 quantity">
                <button type="button" onClick={() => { qty > 0 ? setQty(prevQty => prevQty - 1) : setQty(0) }}><RemoveIcon /></button>
                <input value={qty} />
                <button type="button" onClick={() => { setQty(prevQty => prevQty + 1) }}><AddIcon /></button>
            </div>
        </div>
    );
};

export default Cards;
