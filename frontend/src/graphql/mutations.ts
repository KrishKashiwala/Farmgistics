import { gql } from '@apollo/client';
const CREATE_FARMER = gql`
    mutation createFarmer($name: string) {
        createFarmer(name: $name) {
            name
        }
    }
`;
export { CREATE_FARMER };
