import React from 'react';
import './LearnMore.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      
      <main>
        {/* Top Section with Image and Title */}
        <div className='top-section'>
            <div className='image-container'>
                <img src="/collaborative-community.png" alt="Community Collaboration" className="community-image" />
            </div>
            <div className='text-container'>
                <h1>Learn More About Our Collaborative Community Service Platform</h1>
                <p>We're redefining the way retirement homes and schools come together to create meaningful community service experiences. Our platform is a bridge connecting the wisdom of seniors with the enthusiasm of students.</p>
            </div>
        </div>
        
        {/* Two Columns Section */}
        <div className="two-columns">
          <div className="column">
            <h2>For Retirement Homes</h2>
            <ul>
              <li> 🌟 Senior Interests: Showcase your volunteers' interests and skills.</li>
              <li> 🎉 Tailored Opportunities: Match seniors with projects they'll love.</li>
              <li> 🤝 Connections Beyond Walls: Foster relationships with schools and break the barriers of isolation.</li>
            </ul>
          </div>
          <div className="column">
            <h2>For Schools</h2>
            <ul>
              <li> 🎓 Event Sign-up: Browse and request for community service or speaker events from participating retirement homes.</li>
              <li> 📅 Host Your Events: Propose and organize events within retirement homes.</li>
              <li> 🌍 Inspire and Impact: Provide students with experiences beyond the classroom.</li>
            </ul>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="cta">
          <h2>Ready to Create Events Together?</h2>
          <p>Dive deeper into the possibilities by joining [Service Name]. Let's create a world where every community thrives through the shared efforts of our seniors and students.</p>
          <Link to="/sign-up"><button>Sign up</button></Link>
        </div>
      </main>
      
    </div>
  );
};

export default LearnMore;
