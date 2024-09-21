import styles from "./Contatos.module.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <div className={styles.icones}>
          <a
            href="mailto:maeldson2015@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className={styles.icone} />
          </a>

          <a
            href="https://www.instagram.com/maeldson_freire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>

          <a
            href="https://github.com/maeldsoncavalcante100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/maeldson-cavalcante-freire-costa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contatos;
