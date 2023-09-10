import { Provider } from "react-redux";
import Body from "./Component/Body";
import appStore from "./Utils/appstore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
