import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    '/images/board1.jpg',
    '/images/board2.jpg',
    '/images/board3.jpg',
    '/images/board4.jpg',
  ];

  return (
    <Wrapper>
      {/* HEADER INTRO */}
      <motion.div
        className='intro'
        initial='hidden'
        animate='show'
        variants={fadeUp}
      >
        <h2 className='subtitle'>Designed for the Fearless.</h2>
        <h1 className='brand'>YourSweetNightmare</h1>
        <h2 className='tagline'>Skate. Destroy. Repeat.</h2>

        <p className='description'>
          Boards built for rebels — crafted to grind, shred, and dominate the
          streets. Zero rules. Zero limits. Pure skate culture.
        </p>
      </motion.div>

      {/* STORY */}
      <section className='story container'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          OUR STORY
        </motion.h2>

        <motion.p
          className='story-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <strong>YourSweetNightmare (YSN)</strong> began as a late-night idea
          inside a dimly lit garage — a place where broken boards, spilled
          paint, and raw ambition collided. We crafted our first deck using
          borrowed tools and a dream too big to ignore. What started as a
          personal obsession soon became a movement.
        </motion.p>

        <motion.p
          className='story-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          As word spread, riders from every corner — street skaters, bowl
          shredders, freestyle rebels — were drawn to the raw feel, durability,
          and attitude of our decks. YSN quickly became a symbol of{' '}
          <strong>authentic street culture</strong> — not polished, not perfect,
          but bold, fearless, and real.
        </motion.p>

        <motion.p
          className='story-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Over the years, we evolved from handmade decks to a full ecosystem of
          elite gear and accessories trusted globally. Today our products are
          used by
          <span className='highlight'>
            {' '}
            world-class pro riders, championship competitors, filmmakers, and
            skate academies
          </span>{' '}
          across Asia, Europe, and the Americas.
        </motion.p>

        <motion.p
          className='story-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our philosophy is simple:
          <strong> “Never Skate Safe — Skate True.”</strong>
          We don’t chase validation — we chase the next innovation, the next
          challenge, the next rider ready to break their limits.
        </motion.p>

        <motion.p
          className='story-text'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          With every board we design, every accessory we refine, and every
          collaboration we release —
          <span className='highlight'>
            YSN continues to set the benchmark for premium skate engineering.
          </span>
        </motion.p>
      </section>

      {/* ACHIEVEMENTS */}
      <section className='achievements container'>
        <h2 className='section-title'>OUR ACHIEVEMENTS</h2>

        <div className='achievements-grid'>
          {[
            {
              title: '500K+ Riders Worldwide',
              desc: 'Trusted by riders in 32+ countries.',
            },
            {
              title: 'Pro-Level Endorsements',
              desc: 'Preferred by global champions.',
            },
            {
              title: 'Award-Winning Designs',
              desc: 'Recognized for innovation & durability.',
            },
            {
              title: 'Premium Accessories',
              desc: 'Trusted wheels, bearings & safety gear.',
            },
          ].map((item, i) => (
            <motion.div
              className='achievement-card'
              key={i}
              initial='hidden'
              whileInView='show'
              variants={fadeUp}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISION SECTION */}
      <section className='vision container'>
        <div className='vision-grid'>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className='vision-img'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img} loading='lazy' alt='YSN Vision' />
            </motion.div>
          ))}
        </div>

        <motion.div
          className='vision-content'
          initial='hidden'
          whileInView='show'
          variants={fadeUp}
        >
          <h2>Built for the Bold</h2>
          <p>
            Every board is engineered for skaters who refuse to follow the
            rules. Our gear thrives under pressure and amplifies your style.
          </p>
          <p>
            You're not just buying a skateboard —{' '}
            <strong>you're joining a movement.</strong>
          </p>
        </motion.div>
      </section>

      {/* WHY TRUST US */}
      <section className='trust container'>
        <h2 className='section-title'>WHY RIDERS TRUST US</h2>

        <div className='trust-grid'>
          {[
            {
              t: 'Premium Craftsmanship',
              d: 'World-class materials & precision.',
            },
            { t: 'Tested by Pros', d: 'Approved by elite skate athletes.' },
            { t: 'Transparent & Honest', d: 'Real quality — no shortcuts.' },
            { t: 'Worldwide Community', d: 'YSN unites skaters everywhere.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className='trust-card'
              initial='hidden'
              whileInView='show'
              variants={fadeUp}
            >
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  padding-bottom: 6rem;

  .intro {
    padding: 5rem 2rem;
    text-align: center;
    color: #111;

    .brand {
      font-family: 'New Rocker';
      font-size: clamp(3.2rem, 6vw, 7rem);
      text-shadow: 3px 3px #ff9f43;
    }

    .subtitle {
      color: #333;
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }

    .tagline {
      color: #ff9f43;
      text-transform: uppercase;
      letter-spacing: 6px;
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
    }

    .description {
      max-width: 650px;
      margin: auto;
      font-size: 1.7rem;
      color: #444;
      line-height: 1.8;
    }
  }

  /* STORY */
  .story {
    padding: 5rem 0;
    max-width: 900px;

    .section-title {
      font-size: 4rem;
      font-weight: 900;
    }

    .story-text {
      margin: 1.8rem 0;
      color: #333;
      line-height: 1.8;
      font-size: 1.6rem;
    }
  }

  /* ACHIEVEMENTS */
  .achievements {
    margin-top: 4rem;

    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 2.5rem;
    }

    .achievement-card {
      background: white;
      padding: 2rem;
      border-radius: 1.4rem;
      text-align: center;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      transition: 0.3s ease;

      &:hover {
        transform: translateY(-6px);
      }
    }
  }

  /* VISION */
  .vision {
    margin-top: 6rem;

    .vision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;

      img {
        width: 100%;
        border-radius: 1.2rem;
        height: 260px;
        object-fit: cover;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
    }

    .vision-content {
      margin-top: 3rem;
      text-align: center;

      h2 {
        font-size: 3rem;
        margin-bottom: 1.2rem;
      }

      p {
        font-size: 1.6rem;
        color: #555;
      }
    }
  }

  /* TRUST */
  .trust {
    margin-top: 8rem;

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2.5rem;
    }

    .trust-card {
      background: white;
      padding: 3rem;
      border-radius: 1.4rem;
      text-align: center;
      box-shadow: 0 9px 25px rgba(0, 0, 0, 0.08);
      transition: 0.3s;

      &:hover {
        transform: translateY(-6px);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .story {
      padding: 3rem 1.6rem !important; /* Adds space left/right */
      max-width: 100% !important;
      margin: auto;

      .section-title {
        font-size: 2.8rem !important;
        text-align: center;
      }

      .story-text {
        font-size: 1.5rem !important;
        line-height: 1.85 !important;
        text-align: left; /* Clean readable alignment */
        margin-bottom: 2rem;
        padding: 0 0.3rem; /* Tiny balance spacing */
      }
    }
  }
`;

export default About;
