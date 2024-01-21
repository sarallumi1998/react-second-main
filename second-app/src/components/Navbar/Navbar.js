// Navbar.js
import React from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import './Nav.css';

const Navbar = ({ activeSection, handleSetActive }) => {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <ScrollLink to="customCarousel" smooth={true} duration={500} onClick={() => handleSetActive('home')}>
          FurnStore
        </ScrollLink>
      </div>
      <ul>
      <li>
          <ScrollLink to="customCarousel" smooth={true} duration={500} onClick={() => handleSetActive('home')}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500} onClick={() => handleSetActive('about')}>
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="review" smooth={true} duration={500} onClick={() => handleSetActive('review')}>
            Review
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="login" smooth={true} duration={500} onClick={() => handleSetActive('login')}>
            Login
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="signup" smooth={true} duration={500} onClick={() => handleSetActive('signup')}>
            Sign Up
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleSetActive('contact')}>
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
