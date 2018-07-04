"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
exports.registerMutation = graphql_tag_1.default `
    mutation RegisterMutation($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path,
            message
        }
    }
`;
//# sourceMappingURL=registerMutation.js.map