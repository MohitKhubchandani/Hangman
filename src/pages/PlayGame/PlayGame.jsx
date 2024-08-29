import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MaskedText from '../../Components/MaskedText/MaskedText';
import LetterButtons from '../../Components/LetterButtons/LetterButton';
import HangMan from '../../Components/HangMan/HangMan';
import GameOverCard from '../../Components/GameOverCard/GameOverCard';

const PlayGame = () => {
  const [step, setStep] = useState(0);
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200); // Adjust the width as needed
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (wordSelected) {
      const uniqueLetters = [...new Set(wordSelected.toUpperCase())];
      const guessedAll = uniqueLetters.every(letter => usedLetters.includes(letter));

      if (guessedAll) {
        setTimeout(() => {
          setWin(true);
        }, 100);
      }
    }
  }, [usedLetters, wordSelected]);

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

  if (isMobile) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-500">Not Available on Mobile</h1>
        <p className="text-xl mt-4">This game is not available on mobile devices. Please use a desktop or tablet.</p>
        <Link 
          to="/" 
          className="text-xl font-semibold text-blue-500 mt-8 block"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4 mt-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Hangman</h1>
      
      {gameOver ? (
        <GameOverCard onTryAgain={resetGame} />
      ) : win ? (
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-green-600">You Win!</h2>
          <button
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r bg-violet-400 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black mt-8"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
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
              style={{ marginTop: '20px', marginLeft: '30px' }}
            >
              Menu
            </Link>
            <button
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-violet-400 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black"
              style={{ marginTop: '20px', marginLeft: '30px' }}
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
