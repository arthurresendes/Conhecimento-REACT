import { obterAlunos } from "../api/GetAlunos";
import { useState, useEffect } from "react";
import { adicionarAluno } from "../api/PostAluno";

const Consumo = () => {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)
    const [novoId, setNovoId] = useState('');
    const [novoNome, setNovoNome] = useState('');

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

    const handleAdicionarAluno = async (e) => {
        e.preventDefault();
        if (!novoId || !novoNome) {
            alert("Por favor, preencha o ID e o Nome!");
            return;
        }
        try {
            await adicionarAluno(novoId, novoNome);
            setAlunos([...alunos, { id: novoId, name: novoNome }]);
            setNovoId('');
            setNovoNome('');
        } catch (err) {
            alert("Erro ao adicionar aluno. Verifique o console.", err);
        }
    };

    if (carregando) return <p>Carregando...</p>
    if (erro) return <p>Erro: {erro}</p>
    const user = localStorage.getItem('user')
    return (
        <div>
            {user === 'Arthur' ? (
                <div>
                    <h3>Painel do Administrador: Adicionar Aluno</h3>
                    <form onSubmit={handleAdicionarAluno} style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="ID do Aluno"
                            value={novoId}
                            onChange={(e) => setNovoId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nome do Aluno"
                            value={novoNome}
                            onChange={(e) => setNovoNome(e.target.value)}
                        />
                        <button type="submit">Adicionar</button>
                    </form>
                </div>
            ) : (
                <p>Olá usuário comum (Modo de leitura apenas)</p>
            )}

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
            {user === 'Arthur' ? 'Ola admin' : 'Ola usuario'}
        </div>
    )
}

export default Consumo