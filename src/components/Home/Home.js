import React from 'react';
import { useDist } from '../../Hooks';
import PropTypes from 'prop-types';
import Carousel from '../Carousel'; 
import './Home.scss';

function Home({ distState }) {
  useDist('home', distState);

  return <div className="Home" id="home">
    <Carousel />
  </div>;
}

Home.propTypes = {
  distState: PropTypes.array
};

export default Home;