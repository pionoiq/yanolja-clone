import React from 'react';
import { icon_top } from '../assets/svg/Svg';

const ScrollTopButton = () => {
  return (
    <button className="btn scroll-top-btn">
      <i className="ico">{icon_top}</i>
    </button>
  );
};

export default ScrollTopButton;
