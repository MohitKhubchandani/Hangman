import TextInputFormContainer from "../../Components/TextInputForms/TextInputFormContainer";
import {useNavigate} from 'react-router-dom'

function StartGame(){
  const navigator = useNavigate();

  function handleSubmit(){
    navigator('/play')
  }
  return(
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-10 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Start Game</h1>
    <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  );
};

export default StartGame;