import React from "react";
import styles from "./Project.module.css";
import atikahImg from "../../assets/images/atikah.jpg";
import benjaminImg from "../../assets/images/benjamin.jpg";
import carolinaImg from "../../assets/images/carolina.jpg";

function Projects() {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
  }
  return (
    <>
      <div className={styles.wrapper} id="ourProjects">
        <h1>Our Projects</h1>
        <div className={styles.projectContainer}>
          <div className={styles.prR}>
            <div>
              <h2>Project One</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia fuga vitae delectus error quisquam esse. Architecto
                quam unde nesciunt cum. Unde, id. Enim aspernatur natus
                asperiores facere, laboriosam cumque dolor ut animi itaque
                repellat amet necessitatibus libero accusamus, nostrum quo
                numquam nesciunt quis fugiat maxime alias aut quisquam minima
                reprehenderit? Doloremque possimus ut repellat in nulla
                consequatur laudantium architecto dolores, soluta hic totam nam
                vero ipsam adipisci provident nisi eveniet quam optio labore
                numquam ad voluptatibus ducimus enim. Minus, ea distinctio,
                necessitatibus vel delectus asperiores optio nesciunt et
                dignissimos fuga hic? Totam non voluptatibus culpa inventore
                dolorem cupiditate veritatis natus.
              </p>
              <a href="#">More Info...</a>
            </div>
            <div>
              <img src={atikahImg} alt="pr1" className={styles.image} />
            </div>
          </div>
          <div className={styles.prR}>
            <div>
              <img src={benjaminImg} alt="pr1" className={styles.image} />
            </div>
            <div>
              <h2>Project Two</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia fuga vitae delectus error quisquam esse. Architecto
                quam unde nesciunt cum. Unde, id. Enim aspernatur natus
                asperiores facere, laboriosam cumque dolor ut animi itaque
                repellat amet necessitatibus libero accusamus, nostrum quo
                numquam nesciunt quis fugiat maxime alias aut quisquam minima
                reprehenderit? Doloremque possimus ut repellat in nulla
                consequatur laudantium architecto dolores, soluta hic totam nam
                vero ipsam adipisci provident nisi eveniet quam optio labore
                numquam ad voluptatibus ducimus enim. Minus, ea distinctio,
                necessitatibus vel delectus asperiores optio nesciunt et
                dignissimos fuga hic? Totam non voluptatibus culpa inventore
                dolorem cupiditate veritatis natus.
              </p>
              <a href="#">More Info...</a>
            </div>
          </div>
          <div className={styles.prR}>
            <div>
              <h2>Project Three</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia fuga vitae delectus error quisquam esse. Architecto
                quam unde nesciunt cum. Unde, id. Enim aspernatur natus
                asperiores facere, laboriosam cumque dolor ut animi itaque
                repellat amet necessitatibus libero accusamus, nostrum quo
                numquam nesciunt quis fugiat maxime alias aut quisquam minima
                reprehenderit? Doloremque possimus ut repellat in nulla
                consequatur laudantium architecto dolores, soluta hic totam nam
                vero ipsam adipisci provident nisi eveniet quam optio labore
                numquam ad voluptatibus ducimus enim. Minus, ea distinctio,
                necessitatibus vel delectus asperiores optio nesciunt et
                dignissimos fuga hic? Totam non voluptatibus culpa inventore
                dolorem cupiditate veritatis natus.
              </p>
              <a href="#">More Info...</a>
            </div>
            <div>
              <img src={carolinaImg} alt="pr1" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
