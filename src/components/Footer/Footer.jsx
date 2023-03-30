import React from 'react';
import { useState } from 'react';
const Footer = () => {
  let [familySiteName, b] = useState([
    '야놀자',
    '야놀자 비즈니스',
    '이지테크노시스',
    '젠룸스',
    '산하정보기술',
    '데일리호텔',
  ]);

  return (
    <footer className="footer">
      <section className="footer__section">
        <div className="footer__logo">
          <img src="" alt="yanolja_logo" />
        </div>
        <address className="footer__address">
          <p className="footer__adrTop"></p>
          <p className="footer__adrMid"></p>
          <p className="footer__adrBtm"></p>
        </address>
        <div className="footer__addInfo">
          <div className="footer__familySite">
            <div className="footer__siteListBtn">
              <h6 className="footer__familySiteTitle">Famliy site</h6>
              <span>X</span>
            </div>
            <div className="footer__siteListCont">
              <p>
                <a href="#">{familySiteName[0]}</a>
              </p>
              <p>
                <a href="#">{familySiteName[1]}</a>
              </p>
              <p>
                <a href="#">{familySiteName[2]}</a>
              </p>
              <p>
                <a href="#">{familySiteName[3]}</a>
              </p>
              <p>
                <a href="#">{familySiteName[4]}</a>
              </p>
              <p>
                <a href="#">{familySiteName[5]}</a>
              </p>
            </div>
          </div>
          <div className="footer__followUs">
            <div className="footer__followUsTitle">Follow Us</div>
            <span className="footer__snsImg">
              <img src="" alt="Linked in" />
            </span>
            <span className="footer__snsImg">
              <img src="" alt="Facebook" />
            </span>
            <span className="footer__snsImg">
              <img src="" alt="Instargram" />
            </span>
            <span className="footer__snsImg">
              <img src="" alt="naver post" />
            </span>
            <span className="footer__snsImg">
              <img src="" alt="youtub" />
            </span>
            <span className="footer__snsImg">
              <img src="" alt="소비자중심 공정거래위원회" />
            </span>
            <span className="footer__designAward">
              <img src="" alt="Design Award 2022" />
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
