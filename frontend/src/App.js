import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import DonationFeed from './pages/DonationFeed';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
