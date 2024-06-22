import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as process from "process";

const httpLink = new HttpLink({
    uri: `${process.env.API_SERVER ?? process.env.NEXT_PUBLIC_API_SERVER}/graphql`, // Replace with your GraphQL server URL
    credentials: "same-origin", // Additional options for handling cookies/authentication (if needed)
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = `${process.env.SERVER_TOKEN ?? process.env.NEXT_PUBLIC_SERVER_TOKEN}`;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;
