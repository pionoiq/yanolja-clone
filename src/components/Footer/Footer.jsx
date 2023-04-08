import React from 'react';
import './Footer.scss';
import { useState } from 'react';
import { ReactComponent as Logo_b2 } from '../../assets/svg/FooterImg/logo_b2.svg';
// import { footerSvgList } from '../../assets/svg/FooterSvg';

const Footer = () => {
  /*Family site toggle*/
  const [isOpen, setList] = useState(false);
  const toggleList = () => {
    setList((isOpen) => !isOpen);
  };

  /*Family site lsit Name */
  let [familySiteName] = useState([
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
          <Logo_b2 width="12.08333vw"></Logo_b2>
        </div>
        <address className="footer__address">
          <ul>
            <li className="footer__adrTodiv">Y-Siren (윤리경영/제보)</li>
            <li className="footer__adrMid">
              <p className="footer__tel">TEL 1644-1346</p>
              <p className="footer__fax">FAX 02-558-4336</p>
              <p className="footer__email">contact@yanolja.com</p>
            </li>
            <li className="footer__adrBtm">
              <p className="footer__adr">서울특별시 강남구 테헤란로 108길 42 (대치동 1003)</p>
              <p className="footer__codivyright">© Yanolja Co., Ltd.</p>
            </li>
          </ul>
        </address>
        <div className="footer__addInfo">
          <div className="footer__familySite">
            <div className="footer__familySiteTitle" onClick={() => toggleList()}>
              <span>Famliy site</span>
              <span>
                <i className="footer__plus"></i>
                <i className="footer__plus--changed"></i>
              </span>
            </div>
            <div className={isOpen ? 'footer__siteListBox' : 'footer__siteListBox--show'}>
              <div className="footer__siteListCont">
                <ul>
                  <li>
                    <a href="#">{familySiteName[0]}</a>
                  </li>
                  <li>
                    <a href="#">{familySiteName[1]}</a>
                  </li>
                  <li>
                    <a href="#">{familySiteName[2]}</a>
                  </li>
                  <li>
                    <a href="#">{familySiteName[3]}</a>
                  </li>
                  <li>
                    <a href="#">{familySiteName[4]}</a>
                  </li>
                  <li>
                    <a href="#">{familySiteName[5]}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__followUs">
            <div className="footer__followUsTitle">Follow Us</div>
            <div className="footer__snsImg">
              <ul>
                <li>
                  <a href="#">
                    <img src="" alt="Linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="" alt="Instar" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="" alt="npost" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="" alt="youtube" />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">
                    <img src="" alt="소비자중심공정거래위원회" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="" alt="Design Award 2022" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
