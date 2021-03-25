import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/'></Route>
        </Switch>
    </div>
  );
}

export default App;
