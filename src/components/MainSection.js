import React from 'react';
import '../style/MainSection.css';
import Navbar from './Navbar'; // Correct default import for Navbar
import PricingCards from './PricingCards'; // Correct default import for PricingCards

const MainSection = () => {
  return (
    <main className="main-section">
      <Navbar /> {/* Navbar will load correctly */}

      <div className="main-banner">
        <div className="quote-text">
          <h2>“Building your dream home with integrity, passion, and quality materials.”</h2>
        </div>

        <div className="appointment-card">
          <h2>Book FREE Appointment</h2>
          <p>For Best Quality Construction At Affordable Rates</p>
          <input type="text" placeholder="Full Name*" />
          <input type="text" placeholder="Mobile Number*" />
          <input type="text" placeholder="sqft of your plot*" />
          <input type="text" placeholder="Location of your plot*" />
          <button>Start Your Construction</button>
          <small>
            By submitting this form, I confirm that I have read and agreed to accept Sri Selva Maha Ganapathi Builders <a href="#">privacy policy</a>.
          </small>
        </div>
      </div>

      <div className="description">
        <p>
          SSGM Builders is a leading construction company specializing in the development of residential and commercial properties. 
          With expertise in both traditional and smart home construction, SSGM Builders focuses on providing high-quality services at competitive prices. 
          Offering a wide range of services, from basic construction methods to advanced design-build projects, SSGM Builders caters to every stage of development—whether it’s new construction or renovation. 
          Our team of skilled engineers and designers ensures that each project is completed with precision, utilizing modern techniques and materials. 
          We prioritize cost-effectiveness while delivering superior craftsmanship for homes, ensuring that every client gets the best value for their investment.
        </p>
      </div>
      <h1> Our Package</h1>
      <PricingCards /> {/* PricingCards component */}
    </main>
  );
};


export default MainSection;

