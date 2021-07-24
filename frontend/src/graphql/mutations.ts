import { gql } from '@apollo/client';
const CREATE_FARMER = gql`
    mutation createFarmer($name: String, $phone: String, $city: String) {
        createFarmer(name: $name, phone: $phone, city: $city) {
            name
            phone
            city
        }
    }
`;
export { CREATE_FARMER };
