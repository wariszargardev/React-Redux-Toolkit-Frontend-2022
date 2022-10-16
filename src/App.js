import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./app/store";
import Cake from "./components/cake";
import IceCream from "./components/iceCream";
import Users from "./components/users";

function App() {
    console.log(store.getState())
  return (
      <Provider store={store}>
        <div className="App">
            <Cake />
            <hr />
            <IceCream />
            <hr />
            <Users />

        </div>
      </Provider>
  );
}

export default App;
