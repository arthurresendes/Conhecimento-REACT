import { obterAlunos } from "../api/GetAlunos";
import { useState, useEffect } from "react";

const Consumo = () => {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        const carregarDados = async () => {
            try {
                setCarregando(true)
                const dados = await obterAlunos();
                setAlunos(dados)
            } catch (err) {
                setErro(`Nao foi possivel carregar ${err}`)
            } finally {
                setCarregando(false)
            }
        }
        carregarDados()
    }, [])

    if (carregando) return <p>Carregando...</p>
    if (erro) return <p>Erro: {erro}</p>
    return (
        <div>
            <h2>Alunos: </h2>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <td>{aluno.id}</td>
                            <td>{aluno.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Consumo