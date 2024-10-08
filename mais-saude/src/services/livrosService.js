import axios from "axios";

const buscarLivros = async () => {
  try {
    const response = await axios.get("https://projeto-final-m4-pda.onrender.com/livros");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os repositórios:", error);
    throw error;
  }
};

export default buscarLivros;