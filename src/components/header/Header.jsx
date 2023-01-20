import React from "react";
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
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me</a>
        </div>
      </div>
    </>
  );
}

export default Header;
