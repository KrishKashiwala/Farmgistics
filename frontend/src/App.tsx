import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FARMERS } from './graphql/queries';
import Farmers from '../../interface';
const App = () => {
    // const FirstFunction = async () => {
    const { data, error, loading } = useQuery<Farmers>(GET_ALL_FARMERS);
    if (error) return <h1>Error : </h1>;
    if (loading || !data) return <h1>...loading</h1>;
    // };
    // useEffect(() => {
    //     FirstFunction();
    // }, []);
    return (
        <div>
            {data.getAllFarmers.map((farmer) => (
                <h1>{farmer.name}</h1>
            ))}
        </div>
    );
};

export default App;
