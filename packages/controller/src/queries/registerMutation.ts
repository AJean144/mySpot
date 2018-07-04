import gql from 'graphql-tag'

export const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path,
            message
        }
    }
`;