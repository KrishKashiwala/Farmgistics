import { gql } from '@apollo/client';
import { graphql } from 'graphql';
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
            token
            email
            city
        }
    }
    mutation getSecond($id : String!){
        getSecond(id : $id){
            name
        }
    }
`;

const FIND_FARMER_POST = gql`
    mutation getAllFarmers($farmerId: String) {
        getAllFarmers(farmerId: $farmerId) {
            title
            des
        }
    }
`;
const USER_POST = gql`
    mutation UserPost(
        $farmerId: String
        $title: String
        $des: String
        $price: String
        $city: String
    ) {
        UserPost(
            farmerId: $farmerId
            title: $title
            des: $des
            price: $price
            city: $city
        ) {
            farmerId
            title
            des
            price
            city
        }
    }
`;
export {
    CREATE_FARMER,
    LOGIN_FARMER,
    FIND_FARMER,
    FIND_FARMER_POST,
    USER_POST
};
