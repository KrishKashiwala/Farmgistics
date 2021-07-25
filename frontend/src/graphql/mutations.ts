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
export { CREATE_FARMER };
