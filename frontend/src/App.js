import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import DonatePage from './pages/DonatePage';
import DonationFeed from './pages/DonationFeed';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DonatePage />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
