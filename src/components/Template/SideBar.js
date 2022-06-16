import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Dejan Kojadinovic</h2>
        <p><a href="programerd10@gmail.com">programerd10@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <span>Hi, I&apos;m Dejan. I like building somethings.</span>
      <span>
        Highly trained, motivated, and ambitious Full Stack Web & Blockchain Developer.
      </span>
      <div>
        I have 5 years of web development experience and
      </div>
      <p>
        3 years of blockchain development experience
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dejan Kojadinovic:<Link to="/">programerd10@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
