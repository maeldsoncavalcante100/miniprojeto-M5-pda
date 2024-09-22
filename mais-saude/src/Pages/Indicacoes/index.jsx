import axios from 'axios'
import { useEffect, useState } from "react";
import Card from "../../components/Cards";
import styles from "./Indicacoes.module.css";

function Indicacoes() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const response = await axios.get(
          "https://projeto-final-m4-pda.onrender.com/livros"
        );
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao buscar os repositórios:", error);
      }
    };

    buscarLivros();
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
