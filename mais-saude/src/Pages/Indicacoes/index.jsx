import Card from "../../components/Cards";
import styles from "./Indicacoes.module.css";

function Indicacoes() {
  return (
    <section className={styles.indicacoes}>
      <h2>Indicações de leitura</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              price={repo.price}
              link={repo.link}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Indicacoes;
