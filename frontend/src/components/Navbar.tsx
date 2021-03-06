import { useState, useEffect } from 'react';
import { FIND_FARMER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { farmer } from '../../interface';
import './componentsCss/navbar.css';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Navbar = () => {
    // const context = useContext(UserContext);
    const history = useHistory();
    const {
        data: data_id,
        error: error_id,
        loading: loading_id
    } = useQuery<farmer>(FIND_FARMER, {
        variables: {
            id: localStorage.getItem('id')
        }
    });

    if (error_id || !data_id || loading_id) console.log(error_id);
    const [search, setSearch] = useState<String>('no');
    const searcher = () => {
        if (search !== 'no') {
            if (
                search === 'spices' ||
                search === 's' ||
                search === 'sp' ||
                search === 'spi' ||
                search === 'sices' ||
                search === 'sip' ||
                search === 'spice'
            ) {
                console.log('working');
                history.push('/spices');
            } else if (
                search === 'vegetables' ||
                search === 'v' ||
                search === 've' ||
                search === 'veggies' ||
                search === 'veg' ||
                search === 'vegetable' ||
                search === 'vegitable' ||
                search === 'veggie' ||
                search === 'vegi'
            ) {
                history.push('/vegetables');
            }
            if (
                search === 'fruits' ||
                search === 'fru' ||
                search === 'fruts' ||
                search === 'futs' ||
                search === 'fuits' ||
                search === 'fruit'
            ) {
                history.push('/fruits');
            }
        }
    };
    if (localStorage.getItem('id') === null)
        return <Redirect to="/not-found" />;
    return (
        <div>
            <div className="row Top-bar">
                <div className="col-4 logo">
                    <img src={data_id?.getByIdFarmers.image} alt="img"></img>
                    <p>Welcome, {`${data_id?.getByIdFarmers.name}`}</p>
                </div>
                <div className="col-auto Search-bar">
                    <div className="input-grp">
                        <input
                            type="text"
                            placeholder="Ex : spices , vegetables , fruits , pulses"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setSearch(e.target.value);
                            }}
                        ></input>
                        <button onClick={searcher}>Search</button>
                    </div>
                </div>
                <div className="col Profile">
                    <Link to="/profile">
                        <img
                            style={{
                                width: '3rem',
                                height: '3rem',
                                borderRadius: '50%',
                                border: '2px solid #6d6d6d',
                                boxShadow: '0px 0px 2px 2px #eeeeee'
                            }}
                            src={data_id?.getByIdFarmers.image}
                        />
                        <p>{`${data_id?.getByIdFarmers.name}`}</p>
                    </Link>
                    <Link to="/cart">
                        <ShoppingCartOutlined fontSize="large" />
                    </Link>
                </div>
            </div>
            <div className="Nav-links">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/spices">Spices</Link>
                    </li>
                    <li>
                        <Link to="/vegetables">Vegetables</Link>
                    </li>
                    <li>
                        <Link to="/fruits">Fruits</Link>
                    </li>
                    <li>
                        <Link to="/pulses">Pulses</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
