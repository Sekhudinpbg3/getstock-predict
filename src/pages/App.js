import { Provider } from "react-redux";
import { Routers, store } from "../config";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
