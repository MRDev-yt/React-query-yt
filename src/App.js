import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import NormalFetching from './components/NormalFetching';
import RQfetching from "./components/RQfetching";

function App() {
  return (
    <div className="app">
      <Router>

      <div className="app__header">
          <Header />
          </div>

          
        <Switch>
        
          
        <Route exact path= "/">
          <Home/>
          </Route>

          <Route path= "/normal">
          <NormalFetching/>
          </Route>

          <Route path= "/rq">
          <RQfetching/>
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
