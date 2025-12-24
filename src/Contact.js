import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLogin } from './store/uiSlice';
import { contactSchema } from './validation/contactSchema';
import { ErrorText } from './Helper/ErrorText';

const Contact = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [mapLoaded, setMapLoaded] = useState(false);

  const [form, setForm] = useState({
    name: user?.firstname ? `${user.firstname} ${user.lastname}` : '',
    email: user?.email || '',
    message: '',
  });
  const [error, setError] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setSubmitError('Please log in to contact us');
      dispatch(openLogin());
      return;
    }
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach(
        (err) => (fieldErrors[err.path[0]] = err.message)
      );
      setError(fieldErrors);
    }
    setError({});
    setSubmitError('');
    e.target.submit();
  };

  return (
    <Wrapper>
      {/* PAGE HEADER */}
      <header className='contact-hero'>
        <h1>Get In Touch</h1>
        <p>
          We're here to help. Whether you have a question, need support, or want
          to collaborate — we'd love to hear from you.
        </p>
      </header>

      {/* MAP WITH SKELETON */}
      <div className='map-wrapper'>
        {!mapLoaded && <div className='map-skeleton' />}

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.433897574961!2d77.58611107321174!3d13.071664712680306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1925ed3bc12f%3A0x7b731ab2850d5f8b!2sPhoenix%20Mall%20Of%20Asia!5e0!3m2!1sen!2sin!4v1704925403473!5m2!1sen!2sin'
          loading='lazy'
          title='Google Maps'
          onLoad={() => setMapLoaded(true)}
          style={{ opacity: mapLoaded ? 1 : 0 }}
        ></iframe>
      </div>

      {/* CONTACT GRID */}
      <section className='contact-section container'>
        {/* LEFT SIDE INFO */}
        <div className='contact-info'>
          <h2>Contact Details</h2>

          <p>
            <strong>Address:</strong> Phoenix Mall of Asia, Bengaluru, India
          </p>

          <p>
            <strong>Email:</strong> support@yoursweetnightmare.com
          </p>

          <p>
            <strong>Phone:</strong> +91 12345 67890
          </p>

          <p className='desc'>
            Customer support available Mon–Sat, 10AM – 6PM
            <br />
            We aim to reply within 24 hours.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          action='https://formspree.io/f/xleqglpe'
          method='POST'
          className='contact-form'
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type='text'
              placeholder='Your Name'
              name='username'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            {error.name && <ErrorText text={error.name} />}
          </div>
          <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {error.email && <ErrorText text={error.email} />}
          </div>
          <div>
            <textarea
              placeholder='Write your message...'
              name='message'
              rows='6'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {error.message && <ErrorText text={error.message} />}
          </div>
          {submitError && <ErrorText text={submitError} />}
          <button type='submit' className='submit-btn'>
            Send Message
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 5rem;

  /* HERO SECTION */
  .contact-hero {
    text-align: center;
    padding: 6rem 2rem 3rem;

    h1 {
      font-size: 4.2rem;
      font-weight: 900;
      margin-bottom: 1.4rem;
    }

    p {
      font-size: 1.8rem;
      max-width: 700px;
      margin: 0 auto;
      color: #555;
    }
  }

  /* MAP WRAPPER */
  .map-wrapper {
    width: 100%;
    max-width: 1200px;
    height: 400px;
    margin: 3rem auto;
    position: relative;
    border-radius: 1.2rem;
    overflow: hidden;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.12);

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      transition: opacity 0.4s ease-in-out;
    }
  }

  /* SKELETON LOADER */
  .map-skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #f0f0f0 0%, #e2e2e2 50%, #f0f0f0 100%);
    animation: shimmer 1.6s infinite linear;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* CONTACT SECTION GRID */
  .contact-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    margin-top: 6rem;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 0 2rem;
    }
  }

  /* INFO LEFT SIDE */
  .contact-info {
    padding: 2rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      font-weight: 800;
    }

    p {
      font-size: 1.7rem;
      margin-bottom: 1rem;
      line-height: 1.6;

      strong {
        color: rgb(235, 143, 52);
      }
    }

    .desc {
      margin-top: 2rem;
      color: #444;
      font-size: 1.6rem;
    }
  }

  /* FORM RIGHT SIDE */
  .contact-form {
    background: white;
    padding: 3rem 4rem;
    border-radius: 1.5rem;
    box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    input,
    textarea {
      width: 100%;
      padding: 1.2rem 1.5rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1.6rem;
      transition: border 0.2s ease;

      &:focus {
        border-color: rgb(235, 143, 52);
        outline: none;
      }
    }

    .submit-btn {
      padding: 1.2rem;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 8px;
      background: rgb(235, 143, 52);
      border: none;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #000;
        transform: translateY(-3px);
      }
    }
  }
`;

export default Contact;
