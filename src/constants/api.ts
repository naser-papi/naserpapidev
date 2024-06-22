import { gql } from "@apollo/client";

export const APIQuery = {
    subscribe: gql`
        mutation CreateSubscription($email: String!) {
            createSubscription(data: { email: $email }) {
                data {
                    id
                    attributes {
                        email
                    }
                }
            }
        }
    `,
};
