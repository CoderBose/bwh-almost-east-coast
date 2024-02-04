import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliationType: '',
    interests: [],
    distance: 20, // Default distance
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let newInterests = formData.interests;
    if (checked) {
      newInterests = [...newInterests, value];
    } else {
      newInterests = newInterests.filter((interest) => interest !== value);
    }
    setFormData({
      ...formData,
      interests: newInterests,
    });
  };

  const handleAffiliationTypeChange = (value) => {
    setFormData({
      ...formData,
      affiliationType: value,
    });
  };

  const handleDistanceChange = (e) => {
    setFormData({
      ...formData,
      distance: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sending the form data as JSON
      });
      
      if (response.ok) {
        console.log('User created successfully');
        // Redirect or show a success message to the user
      } else if (response.status === 409) {
        console.log('User already exists');
        // Display an error message to the user
      } else {
        console.log('Error creating user');
        // Handle other error cases here
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle any network or unexpected errors
    }
  };
  

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="name">Name of Affiliation</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label htmlFor="distance">Set Maximum Distance</label>
          <input
            type="range"
            id="distance"
            name="distance"
            min="0"
            max="100"
            value={formData.distance}
            onChange={handleDistanceChange}
          />
          <span>{formData.distance} mi</span>

          <div className="form-section interests">
            <label>Choose Your Senior Volunteer's Interests</label>
            <div className="checkbox-group">
                <label className="checkbox-label" htmlFor="Music">
                <input
                    type="checkbox"
                    id="music"
                    name="interests"
                    value="Music"
                    onChange={handleCheckboxChange}
                />
                <span>Music</span>
                </label>
                <label className="checkbox-label" htmlFor="Arts & Culture">
                <input
                    type="checkbox"
                    id="music"
                    name="interests"
                    value="Music"
                    onChange={handleCheckboxChange}
                />
                <span>Arts & Culture</span>
                </label>
                {/* More interests can be added here */}
            </div>
            </div>
          <div className="affiliation-buttons">
          <label>Choose Affiliation Type</label>
          <br></br>
          <br></br>
          <div>
            <button
              type="button"
              className={`affiliation-button ${formData.affiliationType === 'School' ? 'active' : ''}`}
              onClick={() => handleAffiliationTypeChange('School')}
            >
              School
            </button>
            <button
              type="button"
              className={`affiliation-button ${formData.affiliationType === 'Organization' ? 'active' : ''}`}
              onClick={() => handleAffiliationTypeChange('Organization')}
            >
              Organization
            </button>
            <button
              type="button"
              className={`affiliation-button ${formData.affiliationType === 'Senior Living' ? 'active' : ''}`}
              onClick={() => handleAffiliationTypeChange('Senior Living')}
            >
              Senior Living
            </button>
            </div>
          </div>
        </div>

        <button className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
