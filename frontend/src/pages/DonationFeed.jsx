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
    this.getFilters = this.getFilters.bind(this);
  }

  getStudents() {
    const { filters } = this.state;
    database.getFeed(filters).then((students) => {
      if(students){
        this.setState({ students })
      }
      else{
        this.setState({students: []})
      }
    }); 
  }

  getFilters(uf, city, school) {
    const { filters } = this.state;
    filters[0] = uf;
    filters[1] = city;
    filters[2] = school; 

    this.setState({ filters }, this.getStudents());
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
          <FeedFilter 
            handleFilters={this.getFilters} 
          />
        </section>
        <section className="card-list">
          {cardsList}
        </section>
      </div>
    );
  }
}

export default DonationFeed;
