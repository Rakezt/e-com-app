import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const About = () => {
  const images = [
    '/images/hero.jpg',
    '/images/board1.jpg',
    '/images/board2.jpg',
    '/images/board3.jpg',
    '/images/board4.jpg',
    '/images/board5.jpg',
    '/images/board6.jpg',
  ];

  return (
    <Wrapper>
      {/* TOP INTRO */}

      <div className='content'>
        <h2 className='subtitle'>Designed for the Fearless.</h2>
        <h1 className='brand'>YourSweetNightmare</h1>
        <h2 className='tagline'>Skate. Destroy. Repeat.</h2>

        <p className='description'>
          Boards built for rebels — crafted to grind, shred, and dominate the
          streets. Zero rules. Zero limits. Pure skate culture.
        </p>
      </div>

      {/* STORY SECTION */}
      <section className='story container'>
        <h2 className='section-title'>OUR STORY</h2>

        <p className='story-text'>
          <strong>YourSweetNightmare (YSN)</strong> began as a late-night idea
          inside a dimly lit garage — a place where broken boards, spilled
          paint, and raw ambition collided. We crafted our first deck using
          borrowed tools and a dream too big to ignore. What started as a
          personal obsession soon became a movement.
        </p>

        <p className='story-text'>
          As word spread, riders from every corner — street skaters, bowl
          shredders, freestyle rebels — were drawn to the raw feel, durability,
          and attitude of our decks. YSN quickly became a symbol of
          <strong>authentic street culture</strong> — not polished, not perfect,
          but bold, fearless, and real.
        </p>

        <p className='story-text'>
          Over the years, we evolved from handmade decks to a full ecosystem of
          elite gear and accessories trusted globally. Today our products are
          used by
          <span className='highlight'>
            {' '}
            world-class pro riders, championship competitors, filmmakers, and
            skate academies
          </span>{' '}
          across Asia, Europe, and the Americas.
        </p>

        <p className='story-text'>
          Our philosophy is simple:
          <strong>“Never Skate Safe — Skate True.”</strong>
          We don’t chase validation — we chase the next innovation, the next
          challenge, the next rider ready to break their limits.
        </p>

        <p className='story-text'>
          With every board we design, every accessory we refine, and every
          collaboration we release —
          <span className='highlight'>
            YSN continues to set the benchmark for premium skate engineering.
          </span>
        </p>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className='achievements container'>
        <h2 className='section-title'>OUR ACHIEVEMENTS</h2>

        <div className='achievements-grid'>
          <div className='achievement-card'>
            <h3>500K+ Riders Worldwide</h3>
            <p>Trusted by passionate skaters in 32+ countries.</p>
          </div>

          <div className='achievement-card'>
            <h3>Pro-Level Endorsements</h3>
            <p>Used by global skate champions & elite trick artists.</p>
          </div>

          <div className='achievement-card'>
            <h3>Award-Winning Designs</h3>
            <p>Recognized for quality, innovation & durability.</p>
          </div>

          <div className='achievement-card'>
            <h3>Premium Accessories</h3>
            <p>
              Bearings, wheels, apparel & safety gear trusted by world-class
              athletes.
            </p>
          </div>
        </div>
      </section>

      {/* VISION SECTION (MULTI IMAGE GRID + CONTENT) */}
      <section className='vision container'>
        <div className='vision-grid'>
          {images.slice(1, 5).map((img, i) => (
            <div key={i} className='vision-img'>
              <img src={img} alt='YSN Product' />
            </div>
          ))}
        </div>

        <div className='vision-content'>
          <h2>Built for the Bold</h2>
          <p>
            Every board is not just a product — it’s a commitment to quality,
            individuality, and fearlessness. Our mission is to elevate riders of
            all levels with gear that performs under pressure, thrives in chaos,
            and amplifies personal style.
          </p>
          <p>
            You're not just buying a skateboard —
            <strong> you're joining a global movement.</strong>
          </p>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className='trust container'>
        <h2 className='section-title'>WHY RIDERS TRUST US</h2>

        <div className='trust-grid'>
          <div className='trust-card'>
            <h3>Premium Craftsmanship</h3>
            <p>Engineered with world-class materials and modern precision.</p>
          </div>

          <div className='trust-card'>
            <h3>Tested by Pros</h3>
            <p>Used and approved by global skate athletes & experts.</p>
          </div>

          <div className='trust-card'>
            <h3>Transparent & Honest</h3>
            <p>Real quality. Real durability. No shortcuts — ever.</p>
          </div>

          <div className='trust-card'>
            <h3>Worldwide Community</h3>
            <p>From beginners to legends — YSN unites skaters everywhere.</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  padding-bottom: 6rem;

  .content {
    position: relative;
    z-index: 1;
    padding: 5rem;
    max-width: 800px;
    color: white;
  }

  .tagline {
    font-size: 1.6rem;
    letter-spacing: 5px;
    color: #ff9f43;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .brand {
    font-family: 'New Rocker', system-ui;
    font-size: clamp(3rem, 8vw, 7rem);
    line-height: 1;
    margin: 0;
    text-shadow: 3px 3px #ff9f43;
  }

  .subtitle {
    font-size: 2rem;
    margin: 1rem 0 2rem;
    color: black;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .description {
    max-width: 500px;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: black;
  }

  .about-hero {
    text-align: center;
    padding: 6rem 2rem 3rem;

    .title {
      font-size: 5rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .subtitle {
      font-size: 1.8rem;
      color: #444;
      margin-top: 1rem;
    }
  }

  /* STORY */
  .story {
    padding: 6rem 0;
    max-width: 900px;

    .section-title {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: 2rem;
    }

    .story-text {
      font-size: 1.7rem;
      margin-bottom: 2rem;
      color: #333;
      line-height: 1.8;
    }

    .highlight {
      color: rgb(235, 143, 52);
      font-weight: 700;
    }
  }

  /* ACHIEVEMENTS */
  .achievements {
    margin-top: 4rem;

    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }

    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
    }

    .achievement-card {
      background: white;
      padding: 2rem;
      border-radius: 1.2rem;
      text-align: center;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
      transition: 0.3s;

      &:hover {
        transform: translateY(-8px);
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

  /* VISION */
  .vision {
    margin-top: 8rem;

    .vision-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .vision-img img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 1.2rem;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    }

    .vision-content {
      margin-top: 4rem;
      text-align: center;

      h2 {
        font-size: 3.5rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.7rem;
        color: #555;
        margin-bottom: 1.5rem;
      }
    }
  }

  /* TRUST SECTION */
  .trust {
    margin-top: 8rem;

    .section-title {
      text-align: center;
      margin-bottom: 4rem;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
    }

    .trust-card {
      background: white;
      padding: 3rem;
      border-radius: 1.5rem;
      text-align: center;
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
      transition: 0.3s;

      &:hover {
        transform: translateY(-8px);
      }

      h3 {
        font-size: 2rem;
      }

      p {
        margin-top: 1rem;
        font-size: 1.5rem;
        color: #555;
      }
    }
  }

  /* RESPONSIVE */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .achievements-grid,
    .vision-grid,
    .trust-grid {
      grid-template-columns: 1fr;
    }

    .vision-img img {
      height: 250px;
    }
  }
`;

export default About;
