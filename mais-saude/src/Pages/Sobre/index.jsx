import styles from "./Sobre.module.css";
import medics from "./images/medico-logo.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={medics} alt="Médicos" className={styles.medicos} />
        <div className={styles.texto}>
          <h2>Sobre</h2>
          <p>
            Bem-vindo ao nosso <span>Mais Saúde</span>, <br />
            onde o seu bem-estar é <strong>nossa prioridade!</strong>
          </p>
          <p>
            Aqui, você encontrará informações valiosas para melhorar sua
            qualidade de vida e gerenciar o estresse do dia a dia. Oferecemos
            dicas práticas para cuidar da sua saúde mental e física, ajudando
            você a viver de forma mais equilibrada.
          </p>
          <p>
            Além disso, temos uma seção especial de leitura, com sugestões de
            livros que abordam temas como autocuidado, mindfulness, e gestão do
            estresse, para que você possa aprofundar seus conhecimentos e
            fortalecer sua jornada de bem-estar. <br />
            <strong>Cuide de si, cuide da sua saúde!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
