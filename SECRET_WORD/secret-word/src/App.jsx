import { useCallback, useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import "./App.css";
import { wordsList } from "./data/words";

{/* Fases do jogo */ }
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name); {/* Fases do jogo */ }
  const [words] = useState(wordsList); {/* Lista de palavras/categorias */ }

  const [pickedWord, setPickedWord] = useState(""); {/* Palavra selecionada */ }
  const [pickedCategory, setPickedCategory] = useState(""); {/* Categoria selecionada */ }
  const [letters, setLetters] = useState([]); {/* Array de letras */ }

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  console.log(words);

  {/* Função para retornar a categoria e palavra selecionada para o jogo */ }
  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(category, word);
    return { category, word };
  }, [words]);

  {/* Limpar as letras acertadas e erradas */ }
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  {/* Função para startar jogo pegando categoria e palavra e transformando em minuscula */ }
  const startGame = useCallback(() => {
    clearLettersStates();
    const { category, word } = pickWordAndCategory();
    console.log(category, word);
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  console.log(wrongLetters);


  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };


  useEffect(() => {
    if (guesses === 0) {
      /* eslint-disable react-hooks/set-state-in-effect */
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);


  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    console.log(uniqueLetters);
    console.log(guessedLetters);

    if (letters.length > 0 && guessedLetters.length === uniqueLetters.length) {
      setScore((prevScore) => prevScore + 100);
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;