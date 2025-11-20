import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';

const About = () => {
  const data = { name: 'YourSweetNightmare' };

  return (
    <Wrapper>
      <HeroSection myData={data} />

      {/* Section 1 — Brand Story */}
      <section className='story container'>
        <h2 className='section-title'>OUR STORY</h2>
        <p className='story-text'>
          Born on cracked pavements, midnight alleys, and the kind of places
          they tell you to avoid — <strong>YourSweetNightmare</strong> was never
          meant to fit in. We are built for the misfits, for the riders who
          refuse to follow straight lines, for the artists who turn chaos into
          motion. What started as a single handcrafted deck made in a garage
          turned into a global movement powered by rebellion, self-expression,
          and fearless creativity.
        </p>

        <p className='story-text'>
          We don’t mass-produce skateboards — we engineer experiences. From
          premium wood to hand-finished edges, every YSN deck is designed to
          ride harder, last longer, and feel like an extension of your identity.
          No corporate rules. No shortcuts. Just raw, unfiltered culture.
        </p>

        <p className='story-text'>
          Today, YourSweetNightmare stands as a brand trusted by riders across
          the world. Not because we follow trends — but because we create them.
          Every board. Every drop. Every collaboration.
          <span className='highlight'>Made for those who dare.</span>
        </p>
      </section>

      {/* Section 2 — Image + Statement */}
      <section className='vision'>
        <div className='vision-img'>
          <img src='/images/board3.jpg' alt='story' />
        </div>

        <div className='vision-content'>
          <h2>Built for the Bold.</h2>
          <p>
            Our mission is simple — craft products that inspire confidence,
            ignite passion, and empower every rider to become the best version
            of themselves. Because you're not just riding a board —
            <strong>you're riding a statement.</strong>
          </p>
        </div>
      </section>

      {/* Section 3 — Why Trust Us */}
      <section className='trust container'>
        <h2 className='section-title'>WHY RIDERS TRUST US</h2>

        <div className='trust-grid'>
          <div className='trust-card'>
            <h3>Premium Craftsmanship</h3>
            <p>
              Industry-leading materials, handcrafted precision, made to survive
              the streets.
            </p>
          </div>

          <div className='trust-card'>
            <h3>Transparent & Honest</h3>
            <p>
              No fake marketing. No shortcuts. Just real quality and real
              riders.
            </p>
          </div>

          <div className='trust-card'>
            <h3>A Global Community</h3>
            <p>
              We empower creators, skaters, and misfits all around the world.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  padding-bottom: 6rem;

  /* --- STORY SECTION --- */
  .story {
    padding: 6rem 0;
    max-width: 900px;

    .section-title {
      font-size: 4rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }

    .story-text {
      font-size: 1.7rem;
      margin-bottom: 2rem;
      line-height: 1.8;
      color: #333;
    }

    .highlight {
      color: rgb(235, 143, 52);
      font-weight: 700;
    }
  }

  /* --- IMAGE + STATEMENT SECTION --- */
  .vision {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }

    .vision-content {
      padding: 4rem;

      h2 {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        font-weight: 900;
      }

      p {
        font-size: 1.8rem;
        line-height: 1.8;
        color: #444;
      }
    }
  }

  /* --- WHY TRUST US SECTION --- */
  .trust {
    margin-top: 8rem;

    .section-title {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 4rem;
      text-align: center;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    .trust-card {
      background: white;
      border-radius: 1.4rem;
      padding: 3rem;
      text-align: center;
      box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.06);
      transition: 0.3s;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0px 18px 40px rgba(0, 0, 0, 0.1);
      }

      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        color: #555;
      }
    }
  }

  /* --- MOBILE RESPONSIVE --- */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .vision {
      grid-template-columns: 1fr;

      img {
        height: 300px;
      }

      .vision-content {
        padding: 2rem;
      }
    }

    .trust-grid {
      grid-template-columns: 1fr;
    }

    .story .section-title,
    .trust .section-title {
      text-align: center;
    }
  }
`;

export default About;
