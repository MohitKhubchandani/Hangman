import NotFoundPage from "../../Components/NotFoundPage/NotFound";
import getRandomWord from "../../Components/randomWords/RandomWords";
import TextInputFormContainer from "../../Components/TextInputForms/TextInputFormContainer";
import {useNavigate} from 'react-router-dom'


function StartGame(){
  const navigator = useNavigate();

  function handleSubmit() {
    navigator('/Hangman', {state : {wordSelected: getRandomWord()}});
  }
  return(
<div className="h-screen flex flex-col justify-between overflow-hidden">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-10 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Welcome to Hangman
  </h1>
  <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
    <button 
      onClick={handleSubmit} 
      className="
        relative 
        bg-gradient-to-r from-pink-500 to-yellow-500 
        hover:from-pink-600 hover:to-yellow-600
        text-white font-bold py-3 px-6 rounded-full
        shadow-lg 
        transition duration-300 ease-in-out transform hover:scale-110
        overflow-hidden
      "
    >
      <span className="relative z-10">Start Game</span>
    </button>
  </div> 
</div>

  );
};

export default StartGame; 