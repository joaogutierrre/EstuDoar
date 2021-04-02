import React, { Component } from 'react';
import FeedFilter from '../components/FeedFilter';
import DonateStudentCard from '../components/DonateStudentCard';
import './DonationFeed.css'
import * as database from '../services/databaseApi'

class DonationFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filters: [],
    }

    this.getStudents = this.getStudents.bind(this);
  }

  getStudents() {
    const { filters } = this.state
    database.getFeed(filters).then((students) => this.setState({ students })); 
  }

  componentDidMount(){
    this.getStudents();
  }

  render() {
    const { students } = this.state
    const cardsList = students.map((student, index) => (
      <DonateStudentCard 
        student={student}
        key={index}
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
