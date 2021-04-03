import React, { Component } from 'react';
import FeedFilter from '../components/FeedFilter';
import DonateStudentCard from '../components/DonateStudentCard';
import './DonationFeed.css'
class DonationFeed extends Component {
  render() {
    return (
      <div className="feed">
        <section className="feed-hero-container f-column">
          <div className="hero-text-container f-column">
            <h1>
            Agradecemos pelo seu <br /><span className="bg-marker">interesse em doar!</span> 
            </h1>
          </div>
      </section>
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
