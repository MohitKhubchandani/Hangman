import { Link } from "react-router-dom";
import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterButtons from "../../Components/LetterButtons/LetterButton";
import {useState} from 'react'

function PlayGame(){

  const [usedLetters, setUsedLetters] = useState([]);

  function handleLetterClick(letter){
    setUsedLetters([...usedLetters, letter]);
  }

  return(
    <div >
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4 mt-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Play Game</h1>

      <MaskedText text="humble" usedLetters={usedLetters}/>      
      <hr />

      <LetterButtons text="humble" usedLetters={usedLetters} onLetterClick={handleLetterClick}/>      
      <hr />



<div className="flex justify-center">
  <Link 
    to='/start'
    className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black mt-30"
    style={{ marginTop: '200px' }}
  >
    Start Game
  </Link>
</div>
    </div>
  );
};

export default PlayGame;