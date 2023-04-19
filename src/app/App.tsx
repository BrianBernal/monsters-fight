// libraries
import { Provider } from "react-redux";

// redux
import setupStore from "@/redux/store";

//styles
import "./app.scss";

// components
import Home from "@/pages/Home";

function App() {
  return (
    <Provider store={setupStore()}>
      <Home />
    </Provider>
  );
}

export default App;
