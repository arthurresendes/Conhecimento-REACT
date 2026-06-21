import { useState, useRef } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, guesses, score, }) => {
    const [letter, setLetter] = useState(""); {/* Letras */ }
    const letterInputRef = useRef(null); {/* Pegar input de referencia, deixando mais dinâmico pro user */ }
    console.log(pickedWord)

    {/* Função para quando submeter o forms ele verifica a letra e depois limpa e deixa no foco do input para resposta */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);
        setLetter("");
        letterInputRef.current.focus();
    };

    return (
        <div className="game">
            <p className="points">
                <span>Pontuação</span>: {score}
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {/* Se tiver letra mostra se não fica o quadrado branco */}
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span className="letter" key={i}>
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tente adivnhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        onChange={(e) => setLetter(e.target.value)}
                        required
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {/* Mapea todas letras erradas */}
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    );
};

export default Game;