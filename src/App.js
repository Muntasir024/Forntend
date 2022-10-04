import './App.css';
import Login from './login';
import Homepage from './Component/Homepage';
import Register from './Component/Registration/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
