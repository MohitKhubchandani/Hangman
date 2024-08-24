import TextInputFormContainer from "../../Components/TextInputForms/TextInputFormContainer";
import {useNavigate} from 'react-router-dom'

function StartGame(){
  const navigator = useNavigate();

  function handleSubmit(){
    navigator('/play')
  }
  return(
    <div>
      <h1>Start Game</h1>
    <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  );
};

export default StartGame;