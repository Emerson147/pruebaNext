import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";

/**
 * The function is a wrapper component that provides the Apollo client to its child component.
 * @returns The ApolloProvider component is being returned, with the Component and pageProps being
 * passed as props to the Component.
 */
const MyApp = ({ Component, pageProps}) => {
  return (
    <ApolloProvider client={client}>
      <Component  {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;