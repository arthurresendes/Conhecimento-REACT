import './GameOver.css'
const GameOver = ({ playAgain }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={playAgain}>Jogar de novo</button>
        </div>
    )
}

export default GameOver