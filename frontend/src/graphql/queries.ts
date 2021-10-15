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
export { ALL_POSTS, ALL_THINGS, FIND_FARMER, FIND_FARMER_POST, POST_BY_FARMER };
