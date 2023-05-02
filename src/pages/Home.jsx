import React from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import VideoBg from '../assets/video/index.mp4';
import PlatFormVideo from '../assets/video/index_platform.mp4';
import Footer from '../components/Footer/Footer';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onPlatFormBusiness = () => {
    navigate('/whatwedo/platform/');
  };

  return (
    <>
      <main>
        <section className="sec-m">
          <div className="video-bg">
            <video src={VideoBg} autoPlay muted loop width="100%" />
          </div>
          <div className="container">
            <div className="txt-area">
              <h2 className="tit">
                누구나
                <br />
                마음 편히
                <br />놀 수 있게
              </h2>
            </div>
          </div>
        </section>
        <section className="sec-01">
          <div className="container">
            <div className="txt-area">
              <small className="des">Platform business</small>
              <h2 className="tit">
                세상의
                <br /> 모든 여행
              </h2>
              <div className="sub-tit">
                Yanolja app만 있으면
                <br /> 누구나 언제 어디서든
                <br /> 여행을 즐길 수 있습니다.
              </div>
              {/* <button onClick={onPlatFormBusiness} className="btn-common">
                Platform business
              </button> button 형태 보류 */}
              <Link to="/whatwedo/platform/" className="btn-cate">
                Platform business
              </Link>
            </div>
            <div className="video-area">
              <video src={PlatFormVideo} autoPlay muted loop width="100%" />
            </div>
          </div>
        </section>
        <section className="sec-02" />
      </main>
      {/* <ScrollTopButton /> */}
      <Footer></Footer>
    </>
  );
};

export default Home;
