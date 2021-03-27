import { Route, Switch } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
