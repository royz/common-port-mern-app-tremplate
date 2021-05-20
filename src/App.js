import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";

// in dev env, set the default base url for axios
if (process.env.REACT_APP_ENV === 'dev'){
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL
}

function App() {
  axios.get('/hello').then(console.log).catch(console.log)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/about'} component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
