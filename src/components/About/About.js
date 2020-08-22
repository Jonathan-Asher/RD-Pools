import React from 'react';
import { useDist } from '../../Hooks';
import PropTypes from 'prop-types';

function About({ distState }) {
  useDist('about', distState);

  return <div className="About" id="about">
      About
  </div>;
}

About.propTypes = {
  distState: PropTypes.array
};

export default About;