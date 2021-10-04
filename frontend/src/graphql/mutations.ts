import { gql } from "@apollo/client";
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
const FIND_FARMER = gql`
  mutation getByIdFarmers($id: String!) {
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
const SECOND_QUERY = gql`
  query secondq($id: String) {
    secondq(id: $id) {
      name
      email
    }
  }
`;
const THIRD_QUERY = gql`
  query third($id: String) {
    third(id: $id) {
      name
      email
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
    $url: String
  ) {
    UserPost(
      farmerId: $farmerId
      title: $title
      des: $des
      price: $price
      city: $city
      url: $url
    ) {
      farmerId
      title
      des
      price
      url
      city
    }
  }
`;
export {
  CREATE_FARMER,
  LOGIN_FARMER,
  FIND_FARMER,
  FIND_FARMER_POST,
  USER_POST,
  SECOND_QUERY,
  THIRD_QUERY,
};
