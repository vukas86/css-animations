import React from "react";

import styles from "./Reviews.module.css";

import minusImg from "../../assets/images/minus.png";
import annImg from "../../assets/images/ann.png";
import cl1Img from "../../assets/images/cl1.png";
import cl2Img from "../../assets/images/cl2.png";
import cl3Img from "../../assets/images/cl3.png";

function Reviews() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>What our clients say about us</h1>
        <div className={styles.container}>
          <div className={styles.client}>
            <img src={annImg} alt="icon" className={styles.clIcon} />

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptate voluptatem fuga omnis, blanditiis facilis!
            </p>
            <span>
              <img src={minusImg} alt="minus" />
            </span>
            <img src={cl1Img} alt="cl-1" className={styles.clImg} />
            <p>Alena Malena</p>
          </div>
          <div className={styles.client}>
            <img src={annImg} alt="icon" className={styles.clIcon} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptate voluptatem fuga omnis, blanditiis facilis!
            </p>
            <span>
              <img src={minusImg} alt="minus" />
            </span>
            <img src={cl2Img} alt="cl-1" className={styles.clImg} />
            <p>Miki Rurk</p>
          </div>
          <div className={styles.client}>
            <img src={annImg} alt="icon" className={styles.clIcon} />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptate voluptatem fuga omnis, blanditiis facilis!
            </p>
            <span>
              <img src={minusImg} alt="minus" />
            </span>
            <img src={cl3Img} alt="cl-1" className={styles.clImg} />
            <p>Zhu Wang Lopes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
