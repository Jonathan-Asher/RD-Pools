import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Scroll from '../Scroll';

function Navbar({ dist }) {
  const nav = <nav className="rtl navbar fixed-top navbar-expand-sm navbar-light bg-light">
    <Scroll name={ 'home' } dist={ dist }/>
    {/* {<Link className="rtl navbar-brand" to='/'>בריכות RD</Link>} */}
    <button className="rtl navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="rtl navbar-toggler-icon"></span>
    </button>
    <div className="rtl navbar-collapse collapse" id="navbarColor01">
      <ul className="rtl navbar-nav mr-auto">
        <li className="rtl nav-item">
          <Scroll name={ 'about' } dist={ dist }/>
        </li>
        <li className="rtl nav-item">
          <Link className="rtl nav-link" to='/photos'>גלריה</Link>
        </li>
        <li className="rtl nav-item">
          <Link className="rtl nav-link" to='/contact'>צור קשר</Link>
        </li>
      </ul>
      <span className="navbar-text">
        053-9772-182
      </span>
    </div>
  </nav>;
  return nav;
}

Navbar.propTypes = {
  dist: PropTypes.object
};

export default Navbar;