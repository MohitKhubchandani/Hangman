import {Route, Routes} from  "react-router-dom"
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";
import NotFoundPage from "./Components/NotFoundPage/NotFound";

// import TextInputFormContainer from "./Components/TextInputForms/TextInputFormContainer";

function App(){
  return(
  <>
  {/* <h1 className='font-semibold text-3xl'>Welcome To Hangman</h1>
    <TextInputFormContainer onSubmit={(value) => console.log('value coming from the hidden firm is', value)}/> */}
   
    <Routes>
      <Route path="/"element={<StartGame/>}/>
      <Route path="/Hangman" element={<PlayGame/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </>
 ) 
}

export default App;