import gql from 'graphql-tag'

export const registerMutation = gql`
    mutation($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path,
            message
        }
    }
`;