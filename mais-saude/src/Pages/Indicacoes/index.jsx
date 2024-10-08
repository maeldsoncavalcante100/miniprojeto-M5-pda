import { useEffect, useState } from "react";
import Card from "../../components/Cards";
import styles from "./Indicacoes.module.css";
import buscarLivros from "../../services/livrosService";

function Indicacoes() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const data = await buscarLivros();
        setLivros(data);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
      }
    };

    carregarLivros();
  }, []);

  return (
    <section className={styles.indicacoes}>
      <h2>Indicações de leitura</h2>
      {livros.length > 0 ? (
        <section className={styles.lista}>
          {livros.map((liv) => (
            <Card
              key={liv.id}
              name={liv.name}
              description={liv.description}
              price={liv.price}
              link={liv.link}
            />
          ))}
        </section>
      ) : (
        <p>Carregando livros...</p>
      )}
    </section>
  );
}

export default Indicacoes;
