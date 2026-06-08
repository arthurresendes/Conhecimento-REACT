const URL = "http://127.0.0.1:8000";

export const adicionarAluno = async (id, name) => {
  try {
    const response = await fetch(`${URL}/adicionar_aluno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (erro) {
    console.error("Erro no serviço", erro);
    throw erro;
  }
};
