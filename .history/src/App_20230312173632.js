import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
