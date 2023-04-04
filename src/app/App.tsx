// libraries
import { Provider } from "react-redux";

// components
import Home from "../pages/Home";

// redux
import store from "@/redux/store";

// styles
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
