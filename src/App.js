import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import SignUp from './SignUp'; 
import LearnMore from './LearnMore'; 
import ContactForm from './ContactForm'; 
import LogIn from './Login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/" className="title-link">
          <h1>WisdomServe</h1>
        </Link>
          <nav>
            <Link to="/contact-us"><button>Contact Us</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </nav>
        </header>

        <Routes>
          {/* to re-direct pages */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>

        <footer className="App-footer">
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </footer>
      </div>
    </Router>
  );
}

const Main = () => {
  return (
    <main>
        <section className="hero">
          <h2>Rediscover the Joy of Community</h2>
          <p>Welcome to [Service Name], where age is celebrated, and community service is the key to staying connected and making a lasting impact.</p>
          <p>We're on a mission to redefine the senior experience by connecting senior living homes with service opportunities that bring purpose, joy, and a sense of belonging for their members.</p>
          <div className="cta-buttons">
            <Link to="/sign-up"><button>Sign up</button></Link>
            <Link to="/learn-more"><button>Learn More</button></Link>
          </div>
        </section>

        <section className="why-volunteer">
          <h3>Why Volunteer with Us?</h3>
          <p>At [Service Name], we believe that everyone, regardless of age, has something valuable to contribute. Our carefully curated service opportunities are designed to harness the unique talents and wisdom of our seniors, creating a tapestry of shared experiences that enrich lives.</p>
          <div className="benefits">
            <div className="benefit">
              <img src="/connect-with-community.png" alt="Connect Icon" className="benefit-icon" />
              <h4>Connect with Your Community</h4>
              <p>Build relationships and create meaningful connections with people in your neighborhood.</p>
            </div>
            <div className="benefit">
              <img src="/stay-active.png" alt="Active Icon" className="benefit-icon" />
              <h4>Stay Active and Healthy</h4>
              <p>Engage in physical activities and maintain an active lifestyle.</p>
            </div>
          </div>
          <div className="images">
            <img src="/community-engagement.png" alt="Community engagement" />
            <img src="/seniors-and-children.png" alt="Seniors and children" />
          </div>
        </section>
      </main>
  );
}

export default App;

