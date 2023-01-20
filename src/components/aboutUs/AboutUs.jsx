import React from "react";
import doctorImg from "../../assets/images/borba.jpg";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nesciunt praesentium perferendis quisquam sequi sit maiores
            corporis. Totam nulla numquam, nam vitae ad mollitia ex? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Eum, non itaque, ullam
            rem adipisci suscipit, quidem soluta mollitia esse facere voluptate
            consequatur illo distinctio quo. Minus aspernatur modi eveniet fugit
            aperiam ratione et possimus, atque excepturi minima, voluptatibus
            iusto dolorum culpa facilis nisi ad. Voluptatibus eaque incidunt hic
            magni ullam voluptatem blanditiis vitae repellat ea quaerat
            excepturi iure explicabo, minus nisi quo, vel minima in voluptate
            odit molestiae consequuntur delectus nostrum veritatis? Possimus
            magnam consequuntur officiis accusantium mollitia, molestias quia
            distinctio, aspernatur et tempora aut sint. Quod animi officiis quas
            quidem non ut possimus ea eius! Veritatis, illo? Sapiente in,
            dignissimos impedit eos molestiae aspernatur numquam voluptates
            rerum tempora reprehenderit amet nemo, expedita iusto fuga corporis
            cum esse fugiat. Culpa sunt fugit reprehenderit aliquam provident
            necessitatibus fugiat molestiae, quod, sed unde, cumque quae!
            Doloremque odio amet laudantium voluptatibus voluptas illo.
          </p>
        </div>
        <div>
          <img src={doctorImg} alt="doctor" className={styles.drImg} />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
