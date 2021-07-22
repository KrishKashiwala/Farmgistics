import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FARMERS } from './graphql/queries';

interface farmer {
    name: String;
}
interface getAllFarmers {
    getAllFarmers: farmer[];
}

const App = () => {
    const { data, error, loading } = useQuery<getAllFarmers>(GET_ALL_FARMERS);
    if (error) return <h1>Error : </h1>;
    if (loading || !data) return <h1>...loading</h1>;
    console.log(data);
    // setting localstorage
    const setData = async () => {
        localStorage.setItem(
            'name',
            `${data.getAllFarmers.map((farmer) => farmer.name)}`
        );
    };
    setData();
    return (
        <div>
            {data.getAllFarmers.map((farmer: farmer) => (
                <h1>{farmer.name}</h1>
            ))}
            <h1>from local storage</h1>
            {localStorage.getItem('name')}
        </div>
    );
};

export default App;
