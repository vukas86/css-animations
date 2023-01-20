import React from "react";
import { Link } from "react-scroll";

import styles from "./Header.module.css";
import logoImg from "../../assets/logos/Happy_Smile-logos_transparent-removebg-preview.png";

function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <a href="#">
            <img src={logoImg} alt="logo" className={styles.logoImg} />
          </a>
        </div>
        <div className={styles.rightSide}>
          <a href="#">Home</a>
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
          <Link
            to="ourProjects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contactForm"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
