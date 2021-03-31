import React, { Component } from 'react';
import FeedFilter from '../components/FeedFilter';
import DonateStudentCard from '../components/DonateStudentCard';
import './DonationFeed.css'
class DonationFeed extends Component {
  render() {
    return (
      <div className="feed">
        <section className="filter">
          <FeedFilter />
        </section>
        <section className="card-list">
          <DonateStudentCard />
          <DonateStudentCard />
          <DonateStudentCard />
          <DonateStudentCard />
          <DonateStudentCard />
        </section>
      </div>
    );
  }
}

export default DonationFeed;
