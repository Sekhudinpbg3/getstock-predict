import { Provider } from "react-redux";
import { Routers, store } from "../config";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { favicon, favicon16, favicon32, apple_touch } from "../assets";
import 'react-confirm-alert/src/react-confirm-alert.css';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>getStock</title>
          <link rel="canonical" href="https://getstock-info.herokuapp.com/" />
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          <link rel="apple-touch-icon" sizes="180x180" href={apple_touch} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          {/* <link rel="manifest" href='../assets/meta/site.webmanifest' /> */}
        </Helmet>
        <Routers />
      </HelmetProvider>
    </Provider>
  );
}

export default App;
