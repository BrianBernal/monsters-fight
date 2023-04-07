import { Provider } from "react-redux";
import "./App.scss";
import setupStore from "@/redux/store";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={setupStore()}>
      <Home />
    </Provider>
  );
}

export default App;
