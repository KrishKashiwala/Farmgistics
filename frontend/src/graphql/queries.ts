import { gql } from "@apollo/client";
const ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      des
      title
      price
    }
  }
`;
export { ALL_POSTS };
