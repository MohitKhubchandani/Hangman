import { Link } from "react-router-dom";
import MaskedText from "../../Components/MaskedText/MaskedText";
import LetterButtons from "../../Components/LetterButtons/LetterButton";

function PlayGame(){
  return(
    <div >
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-4 mt-8 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Play Game</h1>

      <MaskedText text={'humble'} usedLetters={['b', 'e']}/>      
      <hr />

      <LetterButtons usedLetters={[]}/>      
      <hr />



<div class="flex justify-center min-h-screen bg-gray-100">
  <Link 
    to='/start'
    className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 transform rotate-1 scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black mt-30"
    style={{ marginTop: '200px' }}
  >
    Start Game
  </Link>
</div>





    </div>
  );
};

export default PlayGame;