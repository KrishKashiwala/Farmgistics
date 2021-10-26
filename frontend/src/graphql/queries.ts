import { gql } from '@apollo/client';
const ALL_POSTS = gql`
    query getAllPosts {
        getAllPosts {
            des
            title
            price
        }
    }
`;
const GET_RANDOM_POST = gql`
    query getRandomPost{
        getRandomPost{
            cropType
            url
        }
    }
`
const POST_BY_FARMER = gql`
    query getPostByFarmer($farmerId: String) {
        getPostByFarmer(farmerId: $farmerId) {
            title
            des
            price
            cropType
            city
            url
        }
    }
`;
const FIND_FARMER = gql`
    query getByIdFarmers($id: String!) {
        getByIdFarmers(id: $id) {
            name
            id
            token
            email
            city
            image
        }
    }
`;

const FIND_FARMER_POST = gql`
    query getAllFarmers($farmerId: String) {
        getAllFarmers(farmerId: $farmerId) {
            title
            des
            price
            city
            url
        }
    }
`;

const ALL_THINGS = gql`
    query getAllThings($cropType: String) {
        getAllThings(cropType: $cropType) {
            title
            des
            price
            url
            city
            cropType
            farmerId
        }
    }
`;
const CART_ITEMS = gql`
    query getCartItems($farmerName : String!){
        getCartItems(farmerName : $farmerName){
            name
            farmerName
            rate
            quantity
            city
            description
            photo
        }
    }
`
const GET_FARMER_BY_FARMERID = gql`
    query getFarmerByFarmerId($farmerId : String){
        getFarmerByFarmerId(farmerId : $farmerId){
            name
        }
    }
`
export { ALL_POSTS, ALL_THINGS, CART_ITEMS, FIND_FARMER, FIND_FARMER_POST, POST_BY_FARMER, GET_FARMER_BY_FARMERID, GET_RANDOM_POST };
