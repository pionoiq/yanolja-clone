import React from 'react';
import './Footer.scss';
import { useState } from 'react';
// import { Logo } from '../../svg/footer_img/logo_b2.svg';

const Footer = () => {
  let [familySiteName, b] = useState([
    '야놀자',
    '야놀자 비즈니스',
    '이지테크노시스',
    '젠룸스',
    '산하정보기술',
    '데일리호텔',
  ]);

  const [isOpen, setList] = useState(false);

  return (
    <footer className="footer">
      <section className="footer__section">
        <div className="footer__logo">
          <img src="{Logo}" alt="yanolja_logo" />
        </div>
        <address className="footer__address">
          <div className="footer__adrTodiv">Y-Siren (윤리경영/제보)</div>
          <div className="footer__adrMid">
            <p className="footer__tel">TEL1644-1346</p>
            <p className="footer__fax">FAX 02-558-4336</p>
            <p className="footer__email">contact@yanolja.com</p>
          </div>
          <div className="footer__adrBtm">
            <p className="footer__adr">서울특별시 강남구 테헤란로 108길 42 (대치동 1003)</p>
            <p className="footer__codivyright">© Yanolja Co., Ltd.</p>
          </div>
        </address>
        <div className="footer__addInfo">
          <div className="footer__familySite">
            <div className="footer__siteListBtn">
              {/* <div className="footer__familySiteTitle">Famliy site</div>
              <span>X</span> */}
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
