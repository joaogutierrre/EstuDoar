import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import DonatePage from './pages/DonatePage';
import DonationFeed from './pages/DonationFeed';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import RegisterStudent from './pages/RegisterStudent';
import StudentList from './pages/StudentList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/donation-feed/donate/:id" render={ (props) => <DonatePage { ...props } /> }/>
        <Route path='/donation-feed'><DonationFeed /></Route>
        <Route path='/student-dashboard/add-student'><RegisterStudent /></Route>
        <Route path="/student-dashboard/:id" render={ (props) => <StudentList { ...props } /> }/>
        <Route path='/student-dashboard'><StudentDashboard /></Route>
      </Switch>
    </div>
  );
}

export default App;
