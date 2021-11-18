import { ReportHandler } from 'web-vitals';
import { gql } from '@apollo/client';
const CREATE_FARMER = gql`
    mutation createFarmer(
        $name: String
        $phone: String
        $city: String
        $email: String
        $password: String
        $image: String
        $confirmPassword: String
    ) {
        createFarmer(
            name: $name
            phone: $phone
            city: $city
            email: $email
            image: $image
            password: $password
            confirmPassword: $confirmPassword
        ) {
            name
            phone
            city
            email
            image
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
const CART_POST = gql`
    mutation cartItems(
        $city : String 
        $description :String
        $name : String
        $photo : String
        $rate : String
        $title : String
        $farmerId : String
    ){
        cartItems(
            name : $name
            city : $city
            description : $description
            photo : $photo
            rate : $rate
            title : $title
            farmerId : $farmerId
        ){
            name
            description
            city
            rate
            title
            farmerId
            quantity
            photo
        }
    }
`
const USER_POST = gql`
    mutation UserPost(
        $farmerId: String
        $title: String
        $des: String
        $price: String
        $city: String
        $url: String
        $cropType: String
    ) {
        UserPost(
            farmerId: $farmerId
            title: $title
            des: $des
            price: $price
            city: $city
            cropType: $cropType
            url: $url
        ) {
            farmerId
            title
            des
            price
            cropType
            url
            city
        }
    }
`;

export { CREATE_FARMER, CART_POST, LOGIN_FARMER, USER_POST };
