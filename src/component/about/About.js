import React, { useState } from 'react';
import { Section } from 'react-scroll-section';

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <Section id="about">
      <div className="md-container sm_section-spacing">
        <div className="about-child">
          <h2 className="about-title">
            <span className="about-title_bullets">•••</span>about
            <span className="about-title_bullets">•••</span>
          </h2>
          <div className="about-content-parent">
            <div
              onClick={() => setCount(prevState => prevState + 1)}
              className="about-content-child1"
            >
              <span className="about-title_bullets_child1-title">•••</span>
              <h4 className="about-content-child1_title">
                {count >= 26
                  ? 'thank you alex and platformpro for giving me a shot <3 - Ramzi o7'
                  : 'platformpro'}
              </h4>
              <span className="about-title_bullets_child1-title">•••</span>
            </div>
            <div className="about-content-child2">
              <h4 className="about-headers">
                Let’s face it. Just streaming isn’t enough these days.
              </h4>
              <p>
                The greatest content creators in the world have had their
                personal brand for years. They’re well known and stand out from
                the crowd. If you’re new to the scene, you’re going to need more
                than just good content to escape the noise.
              </p>
              <p>
                At Platformpro we know your content deserves a proper home- a
                beautiful website to show sponsors, a place to own your content,
                and tools to grow your personal brand without being tied to one
                service. Our completely free website builder let’s you get the
                head start you need.
              </p>
              <p className="about-content-child1_p-last">
                Content creators from all over the world are using Platformpro
                to stand out, it’s time to join them.
              </p>
              <button className="btn-bg">get started</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
