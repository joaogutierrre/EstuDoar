import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import FeedFilter from './components/FeedFilter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeedFilter /> 
        <Switch>
          <Route exact path='/'></Route>
        </Switch>
    </div>
  );
}

export default App;
