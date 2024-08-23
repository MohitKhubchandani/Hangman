import TextInputFormContainer from "./Components/TextInputForms/TextInputFormContainer";


function App(){
  return(
  <>
  <h1 className='font-semibold text-3xl'>Welcome To Hangman</h1>
    <TextInputFormContainer onSubmit={(value) => console.log('value coming from the hidden firm is', value)}/>
  </>
 ) 
}

export default App;