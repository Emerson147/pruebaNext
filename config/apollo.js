import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch";

const client = new ApolloClient({
  connectToDevTools: true, 
  cache: new InMemoryCache(),
  link: new HttpLink({
    //Donde esta ubicado apollo client
    uri: "http://localhost:4000/",
    fetch
  }) 
});

export default client;