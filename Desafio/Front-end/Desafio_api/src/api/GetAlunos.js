const URL = "http://127.0.0.1:8000";

export const obterAlunos = async () => {
  try {
    const response = await fetch(`${URL}/ver_alunos`);
    localStorage.setItem("user", "Arthur");

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dados = await response.json();
    return dados.alunos;
  } catch (erro) {
    console.error("Erro no serviço, verifique o seguinte erro: ", erro);
    throw erro;
  }
};
