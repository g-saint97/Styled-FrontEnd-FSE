import '../styles/globals.css';
import {Provider, createClient} from 'urql';

const client =  createClient({url: "http://localhost:1337/graphql"});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
        <Component />
    </Provider>
  );

};
export default MyApp
