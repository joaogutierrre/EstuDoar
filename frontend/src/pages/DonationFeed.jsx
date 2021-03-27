import React, { Component } from 'react';
import FeedFilter from '../components/FeedFilter';
import StudentCard from '../components/StudentCard';
import './DonationFeed.css'
class DonationFeed extends Component {
  render() {
    return (
      <div className="feed">
        <section className="filter">
          <FeedFilter />
        </section>
        <section className="card-list">
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </section>
      </div>
    );
  }
}

export default DonationFeed;
