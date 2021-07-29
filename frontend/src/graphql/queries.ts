import { gql } from '@apollo/client';
const GET_ALL_FARMERS = gql`
    query getAllFarmers {
        getAllFarmers {
            name
        }
    }
`;
export { GET_ALL_FARMERS };
