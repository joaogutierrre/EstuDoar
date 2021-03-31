import React, { Component } from 'react';
import FeedFilter from '../components/FeedFilter';
import DonateStudentCard from '../components/DonateStudentCard';
import './DonationFeed.css'
import students from '../fakeStudents'

class DonationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
  }

  getStudents() {
    this.setState({ students })
  }

  componentDidMount(){
    this.getStudents();
  }

  render() {
    const cardsList = students.map((student) => (
      <DonateStudentCard 
        student={student}
      />
    ));
    return (
      <div className="feed">
        <section className="filter">
          <FeedFilter />
        </section>
        <section className="card-list">
          {cardsList}
        </section>
      </div>
    );
  }
}

export default DonationFeed;
