
import Navbar from './Components/Common/Navbar/Navbar';
import { Header, Container , Detail } from "./Components/index";
import { Navbardev } from './Components/index';

import ShoppingCart from './Components/Common/ShoppingCart/ShoppingCart';
import Favs from './Components/Common/Favs/Favs';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from './Components/Common/TopBar';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route path="/details/:key" component={Detail}/>
          <Route path="/" exact component={Container} />
          <Route path="/favs" component={Favs} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
