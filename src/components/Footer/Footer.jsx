import React from 'react';
import '../../assets/scss/_Footer.scss';
import Dropdown from './Dropdown';
import { useState } from 'react';
import {
  logo_b2,
  plus,
  plus_w,
  facebook,
  insta,
  linkedin,
  npost,
  youtube,
  ccm,
  designAward,
} from '../../assets/svg/FooterSvg';

const Footer = () => {
  // plus button rotate
  const [isRotate, setRotate] = useState(false);
  const onRotate = () => {
    setRotate(!isRotate);
  };
  // Family site dorpdown
  const [isOpen, setOpen] = useState(false);
  const onDorpDown = () => {
    setOpen(!isOpen);
  };

  // Family site lsit Name
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
        <div className="footer__logo">{logo_b2}</div>
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
            <div
              className="footer__familySiteBtn"
              onClick={() => {
                onDorpDown();
                onRotate();
              }}
            >
              <span>Famliy site</span>
              <span className={`pCon ${isRotate ? 'rotate' : ''}`}>
                <i className="plusBtn"></i>
                <i className="plusBtn_w"></i>
              </span>
            </div>
            <Dropdown visibility={isOpen}>
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
            </Dropdown>
          </div>
          <div className="footer__followUs">
            <div className="footer__followUsTitle">Follow Us</div>
            <div className="footer__snsImg">
              <ul className="footer__snsUl1">
                <li>
                  <a href="#">{linkedin}</a>
                </li>
                <li>
                  <a href="#">{facebook}</a>
                </li>
                <li>
                  <a href="#">{insta}</a>
                </li>
                <li>
                  <a href="#">{npost}</a>
                </li>
                <li>
                  <a href="#">{youtube}</a>
                </li>
              </ul>
              <ul className="footer__snsUl2">
                <li>{ccm}</li>
                <li>{designAward}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
