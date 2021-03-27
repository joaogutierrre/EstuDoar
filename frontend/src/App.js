import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import DonationFeed from './pages/DonationFeed';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DonationFeed />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
