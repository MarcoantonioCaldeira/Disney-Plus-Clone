import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route crash path="/">

          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
