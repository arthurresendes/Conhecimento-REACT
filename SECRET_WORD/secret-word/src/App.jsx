import { useCallback, useEffect, useState } from "react"
import { wordsList } from './data/words'

{/* Componentes */ }
import StartScreen from "../components/StartScreen"
import Game from "../components/Game"
import GameOver from "../components/GameOver"

{/* Estagios do jogo */ }
const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  {/* Pegar palavra e a categoria */ }
  const pickWordAndCategory = () => {
    const categories = Object.keys(words); {/* Pega todas as chaves */ }
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; {/* Faz uma filtragem arredondada para pegar uma categoria */ }
    const word = words[category][Math.floor(Math.random() * words[category].length)]; {/* Pega a palavra da categoria */ }
    return [word, category]
  }

  const startGame = () => {
    const [word, category] = pickWordAndCategory()
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    console.log(letter)
  }

  const playAgain = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters}
        guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver playAgain={playAgain} />}
    </>
  )
}

export default App
