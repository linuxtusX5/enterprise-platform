import React from 'react';
import '../../../styles/css.css';

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        alt="Modern office workspace"
        className="hero-image"
      />

      <h1 className="page-title">About Us</h1>

      <section className="section">
        <p className="intro-text">
          Welcome to Lacuna Web – where innovative website design meets
          strategic marketing.
        </p>
        <p className="text">
          Based in Vancouver, BC, we specialize in helping businesses worldwide
          achieve success through high-performing websites and customized
          marketing solutions. Whether you're a local startup or an
          international enterprise, we're here to transform your digital
          presence and drive measurable results.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          alt="Team collaboration"
          className="mission-image"
        />
        <p className="text">At Lacuna Web, our mission is simple:</p>
        <ul className="list">
          <li>
            Create visually stunning, user-friendly websites that prioritize
            your audience's experience.
          </li>
          <li>
            Implement SEO strategies that ensure your website ranks where it
            matters – at the top of search engine results.
          </li>
          <li>
            Partner with businesses to deliver tailored marketing campaigns that
            generate revenue and foster long-term growth.
          </li>
        </ul>
        <p className="text">
          We aim to simplify the digital landscape, enabling businesses of all
          sizes to thrive online.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Us?</h2>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Team meeting"
          className="team-image"
        />
        <p className="text">
          What truly sets us apart is our commitment to working closely with our
          clients. We limit the number of projects we take on so that every
          client benefits from direct collaboration with our top designers and
          marketers. This ensures you receive personalized solutions that align
          with your unique goals.
        </p>
        <h3 className="subtitle">What You Can Expect:</h3>
        <ul className="list">
          <li>
            Aesthetic, high-performance websites optimized for search engines
            and designed for real users.
          </li>
          <li>
            Transparent communication and clear expectations from start to
            finish.
          </li>
          <li>
            Tailored marketing strategies that resonate with your audience and
            deliver measurable ROI.
          </li>
          <li>
            Global service with a local touch – while we're based in Vancouver,
            BC, we proudly serve clients across the globe.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Transparency</h3>
            <p>
              Clear, honest communication is at the heart of everything we do.
            </p>
          </div>
          <div className="value-card">
            <h3>Dedication</h3>
            <p>
              Your success is our priority – we work tirelessly to help you
              achieve your goals.
            </p>
          </div>
          <div className="value-card">
            <h3>Practicality</h3>
            <p>
              We build websites that work – no unnecessary complications or
              confusing features.
            </p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>
              We see our clients as partners, and we're here to support you
              every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Your Success Is Our Success</h2>
        <p className="text">
          We believe that behind every website is a person – someone looking for
          answers, solutions, or inspiration. By understanding your business and
          your audience, we create websites that connect and marketing
          strategies that convert.
        </p>
        <p className="text">
          Whether you're launching a new business or refreshing an existing
          brand, Lacuna Web is here to help you succeed in the digital world.
        </p>
      </section>

      <section className="cta-section">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          alt="Team collaboration"
          className="cta-image"
        />
        <h2 className="section-title">Let's Work Together</h2>
        <p className="text">
          Ready to elevate your online presence? Contact us today to learn how
          we can help your business grow with expert website design and
          strategic marketing.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default About;
