import { gql } from '@apollo/client';
const GET_ALL_FARMERS = gql`
    query getAllFarmers {
        getAllFarmers {
            name
        }
    }
`;
const SELECT_FARMER = gql`
    query getByEmailFarmers($id: String) {
        getByEmailFarmers(id: $id) {
            id
            name
            city
            email
        }
    }
`;
export { GET_ALL_FARMERS, SELECT_FARMER };
 