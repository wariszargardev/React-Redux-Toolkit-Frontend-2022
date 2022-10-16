import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./app/store";
import Cake from "./components/cake";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Cake />
        </div>
      </Provider>
  );
}

export default App;
