import { gql } from '@apollo/client';
const CREATE_FARMER = gql`
    mutation createFarmer(
        $name: String
        $phone: String
        $city: String
        $email: String
        $password: String
        $confirmPassword: String
    ) {
        createFarmer(
            name: $name
            phone: $phone
            city: $city
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        ) {
            name
            phone
            city
            email
            city
            password
            confirmPassword
        }
    }
`;
const LOGIN_FARMER = gql`
    mutation login($email: String, $password: String) {
        login(email: $email, password: $password) {
            email
            token
            name
            city
            id
        }
    }
`;
const FIND_FARMER = gql`
    mutation getByIdFarmers($id: String!) {
        getByIdFarmers(id: $id) {
            name
            id
            email
        }
    }
`;
export { CREATE_FARMER, LOGIN_FARMER, FIND_FARMER };
