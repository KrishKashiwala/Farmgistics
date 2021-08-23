import { gql } from '@apollo/client';
const CREATE_FARMER = gql`
    mutation createFarmer(
        $name: string
        $phone: string
        $city: string
        $email: string
        $password: string
        $confirmPassword: string
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
    mutation login($email: string, $password: string) {
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
    mutation getByIdFarmers($id: string!) {
        getByIdFarmers(id: $id) {
            name
            id
            email
            city
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
