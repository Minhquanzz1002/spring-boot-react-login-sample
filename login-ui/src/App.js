import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import DefaultRoute from "./routes/DefaultRoute";
function App() {
  return (
    <BrowserRouter>
      <DefaultRoute/>
    </BrowserRouter>
  );
}

export default App;
