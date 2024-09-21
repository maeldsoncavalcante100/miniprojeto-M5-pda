import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, bem-vindo ao <br />
          <span>Mais Saúde</span> <br />
          Seu site de dicas de saúde!
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Saiba mais sobre
        </Link>
      </div>
      <figure>
        <img
          className={styles.img_home}
          src="/medica-logo.svg"
          alt="Imagem de Home"
        />
      </figure>
    </section>
  );
}

export default Home;
