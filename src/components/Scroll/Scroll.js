import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.scss';

const names = {'about': 'עלינו', 'home': 'RD בריכות'};
const classes = {'about': 'scroll rtl nav-link', 'home': 'scroll rtl navbar-brand'};

function Scroll({ name, dist  }) {
  return <a 
    className={classes[name]} 
    onClick={() => {
      handleClick(dist, name);
    }}>
    { names[name] }
  </a>;
}

const maxTravel = 40;

const handleClick = (dist, name) => {
  dist = parseInt(dist[name]);
  if(!dist) return;
  if(dist == 55 || dist == 56 || dist == 57) return;
  if(dist < 56) {
    ScrollUp(dist);
  } else
    ScrollDown(dist);
};

function ScrollDown(dist) {
  const minTravel = 1;
  var id = setInterval(() => {
    if(dist > 56+maxTravel) {
      dist -= maxTravel;
      // console.log(dist);
      window.scrollBy(0, maxTravel);
      if (dist == 56) {
        clearInterval(id);
      }
    } else {
      dist -= minTravel;
      // console.log(dist);
      window.scrollBy(0, minTravel);
      if (dist == 56)
        clearInterval(id);
    }
  }, 1);
}

function ScrollUp(dist) {
  const minTravel = -1;
  var id = setInterval(() => {
    if(dist < 56+(-maxTravel)) {
      dist -= (-maxTravel);
      // console.log(dist);
      if (dist == 56) {
        clearInterval(id);
      } else {
        window.scrollBy(0, (-maxTravel));
      }
    } else {
      dist -= minTravel;
      // console.log(dist);
      if (dist == 56) {
        clearInterval(id);
      } else {
        window.scrollBy(0, minTravel);
      }
    }
  }, 1);
}

Scroll.propTypes = {
  name: PropTypes.string,
  dist: PropTypes.object
};

export default Scroll;