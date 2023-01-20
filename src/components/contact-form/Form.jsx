import React from "react";

import { useState } from "react";

import styles from "./Form.module.css";
import docsImg from "../../assets/images/docs.png";

function Form() {
  const [messge, setMessage] = useState("Initial");

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <div className={styles.container} id="contactForm">
        <h1>Lets Stay in Touch</h1>
        <div className={styles.wrapper}>
          <div>
            <img src={docsImg} alt="art" className={styles.docImg} />
          </div>
          <form>
            <div>
              <label htmlFor="fname">First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value="John"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lname">Last name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value="Smith"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value="youremail@example.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className={styles.btn}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

{
  /* <form class="generated-form"  method="GET" action="submit.php" enctype="text/plain" target="_blank">
<fieldset>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="youremail@gmail.com"><br><br>
  <input type="submit" value="Submit">
</fieldset>
</form> */
}
