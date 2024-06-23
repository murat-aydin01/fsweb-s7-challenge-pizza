import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Order from "./pages/Order.jsx";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import Success from "./pages/Success.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
    <Header></Header>
      <Switch>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
