import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Hamp8</h1>
        </div>

        <div className="about-content">
          <section className="story-section">
            <h2>Our Story: From the Heart of Tradition to the Art of Gifting</h2>
            <p className="tagline">
              <em>Gifts, Endless. Always.</em> It's not just our tagline—it's the principle that has guided us since the very beginning.
            </p>

            <div className="story-content">
              <div className="story-text">
                <h3>Our Roots in Chawri Bazar</h3>
                <p>
                  Our journey began in 2012, not in a modern office, but in the vibrant, bustling lanes of Chawri Bazar, Delhi.
                  For generations, this historic market has been the undisputed heart of printing, customized wedding boxes,
                  and bespoke paper goods in India. It's a place where craftsmanship is a legacy and an eye for detail is everything.
                </p>
                <p>
                  Growing up in this environment taught us more than just business; it taught us the art of personalization.
                  We learned that a perfectly printed invitation or a beautifully crafted box wasn't just a product—it was the
                  start of a celebration, a token of a relationship.
                </p>

                <h3>A Legacy of Exceptional Quality</h3>
                <p>
                  At Hamp8, we carry that legacy forward. We combine the time-honored traditions of Chawri Bazar with modern
                  aesthetics and premium quality. Every corporate gift, every festive hamper, and every customized box we create
                  is built on a foundation of over a decade of experience.
                </p>
                <p>
                  We believe a gift should be a seamless experience, reflecting the care and thought you put into it. That's why
                  we are obsessed with delivering exceptional quality, "Bit By Bit." From the smallest detail to the final presentation,
                  our commitment is to create something not just beautiful, but truly memorable.
                </p>
                <p>
                  Hamp8 is a proud venture of Bit By Bit Web Services Pvt. Ltd.
                </p>
              </div>
            </div>
          </section>

          <section className="values-section">
            <div className="values-grid">
              <div className="value-item">
                <h3>13+ Years of Mastery</h3>
                <p>
                  Since 2012, we have honed our craft in the art of premium gifting, blending deep industry knowledge
                  with modern, creative solutions.
                </p>
              </div>

              <div className="value-item">
                <h3>Chawri Bazar Heritage</h3>
                <p>
                  Our roots are in Delhi's historic hub for printing and bespoke goods, giving us an unmatched legacy
                  in customization and quality.
                </p>
              </div>

              <div className="value-item">
                <h3>Uncompromising Curation</h3>
                <p>
                  We reject mediocrity. Every product is meticulously sourced to ensure it meets our exacting standards
                  of quality, utility, and elegance.
                </p>
              </div>

              <div className="value-item">
                <h3>End-to-End Flawless Execution</h3>
                <p>
                  From bespoke design to seamless nationwide delivery, our dedicated team manages every detail for a
                  professional and impressive experience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
