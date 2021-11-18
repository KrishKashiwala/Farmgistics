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
            id
            url
        }
    }
`;
const FIND_FARMER = gql`
    query getByIdFarmers($id: String) {
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
            id
            farmerId
        }
    }
`;
const CART_ITEMS = gql`
    query getCartItems($farmerId : String!){
        getCartItems(farmerId : $farmerId){
            name
            farmerId
            rate
            quantity
            id
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
const GET_POST = gql`
    query getPostById($id:String){
        getPostById(id:$id){
            city
            title
            price
            url
            cropType
            des
            id
            farmerId
        }
    }
`

// delete queries
const DELETE_CART_ITEM = gql`
    query deleteCartItem($id : String){
        deleteCartItem(id:$id){
            id
        }
        
    }
`
const DELETE_POST_ITEM = gql`
    query deletePostItem($id : String!){
        deletePostItem(id:$id){
            id
        }
        
    }
`


export { ALL_POSTS, DELETE_POST_ITEM, DELETE_CART_ITEM, ALL_THINGS, GET_POST, CART_ITEMS, FIND_FARMER, FIND_FARMER_POST, POST_BY_FARMER, GET_FARMER_BY_FARMERID, GET_RANDOM_POST };
