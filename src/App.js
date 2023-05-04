import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import AddFarm from './AddFarm'

function App() {
  return (
    <div className = "app">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/addfarm">
            <AddFarm/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
