import React, { useState, useEffect } from 'react';
import { icon_arrow_bottom, icon_arrow_top } from '../assets/svg/Svg';

const ScrollTopButton = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScrollTop = () => {
    let between = 7; // 이동 간격 시간
    let scroll = window.setInterval(function () {
      let pos = window.pageYOffset;
      let step = 20; // 이동 크기 픽셀
      if (pos > 0) {
        window.scrollTo(0, pos - step);
      } else {
        window.clearInterval(scroll);
      }
    }, between);
  };

  return (
    <button className={`${position > 0 ? 'active' : ''} btn-scroll-top`} onClick={onScrollTop}>
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
