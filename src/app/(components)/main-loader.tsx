"use client";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@/services";

interface MainLoaderProps {
    children: JSX.Element[];
}

const MainLoader = ({ children }: MainLoaderProps) => {
    return <ApolloProvider client={ApolloClient}>{children}</ApolloProvider>;
};

export default MainLoader;
