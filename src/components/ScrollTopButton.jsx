import React from 'react';
import { icon_arrow_bottom, icon_arrow_top } from '../assets/svg/Svg';

const ScrollTopButton = () => {
  return (
    <button className="btn btn-scroll-top">
      <span className="circle top" />
      <span className="box">
        <i className="ico">{icon_arrow_bottom}</i>
      </span>
      <span className="circle bottom">
        <i className="ico">{icon_arrow_top}</i>
      </span>
    </button>
  );
};

export default ScrollTopButton;
