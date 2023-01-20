import React from "react";
import styles from "./Footer.module.css";

import envelopeImage from "../../assets/icons/envelope.svg";
import phoneImage from "../../assets/icons/phone.svg";
import locationImage from "../../assets/icons/location.svg";

import fbIcon from "../../assets/icons/facebook.svg";
import igIcon from "../../assets/icons/instagram.svg";
import twIcon from "../../assets/icons/twitter.svg";
import logoImg from "../../assets/logos/Happy_Smile-logos_transparent-removebg-preview.png";

function Footer() {
  return (
    <>
      <div className={styles.container} id="aboutUs">
        <div className={styles.leftPart}>
          <img src={logoImg} alt="logo" className={styles.logo} />
          <div className={styles.socialIcons}>
            <a href="#">
              <img src={fbIcon} alt="fb" className={styles.iconsLeft} />
            </a>
            <a href="#">
              <img src={igIcon} alt="ig" className={styles.iconsLeft} />
            </a>
            <a href="#">
              <img src={twIcon} alt="tw" className={styles.iconsLeft} />
            </a>
          </div>
        </div>
        <div className={styles.rightPart}>
          <div>
            <img
              src={locationImage}
              alt="location"
              className={styles.iconsRight}
            />
            <span>21 Hyde Street, Boston, USA</span>
          </div>
          <div>
            <img src={phoneImage} alt="phone" className={styles.iconsRight} />
            <span>+1 555 555556</span>
          </div>
          <div>
            <img
              src={envelopeImage}
              alt="email"
              className={styles.iconsRight}
            />
            <span>info@happysmile.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
