import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterButtons from "../../Components/LetterButtons/LetterButton";
import { useState } from 'react';
import HangMan from "../../Components/HangMan/HangMan";
import GameOverCard from "../../Components/GameOverCard/GameOverCard";

function PlayGame() {
  const [step, setStep] = useState(0);
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;

  function handleLetterClick(letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log('Correct letter selected');
    } else {
      console.log('Incorrect letter selected');
      const newStep = step + 1;
      setStep(newStep);

      if (newStep === wordSelected.length + 1) {
        setTimeout(() => {
          setGameOver(true);
        }, 100);
      }
    }
    setUsedLetters([...usedLetters, letter]);
  }

  function resetGame() {
    window.location.reload(); 
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4 mt-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Hangman</h1>
      
      {gameOver ? (
        <GameOverCard onTryAgain={resetGame} />
      ) : (
        <>
          <MaskedText text={wordSelected} usedLetters={usedLetters}/>      
          <hr />
          <div className="flex justify-center items-center">
            <div className="basis-1/1" style={{ marginLeft: '415px' }}>
              <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
            </div>
            <div className="basis-1/5 flex justify-end">
              <HangMan step={step} />
            </div>
          </div>
          <hr />
          <div className="flex justify-center">
            <Link 
              to='/'
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-yellow-400 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black"
              style={{ marginTop: '50px', marginLeft: '30px' }}
            >
              Menu
            </Link>
            <button
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-violet-400 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black"
              style={{ marginTop: '50px', marginLeft: '30px' }}
              onClick={resetGame}
            >
             Restart
            </button>
            
          </div>
        </>
      )}
    </div>
  );
}

export default PlayGame;
