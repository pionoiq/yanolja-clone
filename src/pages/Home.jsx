import React from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import VideoBg from '../assets/video/index.mp4';

const Home = () => {
  return (
    <>
      <main>
        <section className="sec-m">
          <div className="video-bg">
            <video src={VideoBg} autoPlay muted loop width="100%" />
          </div>
          <div className="container">
            <div className="txt-area">
              누구나
              <br />
              마음 편히
              <br />놀 수 있게
            </div>
          </div>
        </section>
        <section className="sec-01" />
        <section className="sec-02" />
      </main>
      <ScrollTopButton />
    </>
  );
};

export default Home;
