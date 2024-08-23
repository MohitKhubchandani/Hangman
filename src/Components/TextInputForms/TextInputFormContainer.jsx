// Container Layer 
import {useState} from 'react';
import TextInputForm from './TextInputForms';


function TextInputFormContainer({ onSubmit }){
  
  const [value, setvalue] = useState('')
  const [inputType, setInputType] = useState('password')

  function handleFormSubmit(event){
  event.preventDefault();
  onSubmit?.(value)
};

  function handletextInputChange(event){
  console.log(event.target.value);
  setvalue(event.target.value);
}
  return (
    // Calling the presentation Layer
    <TextInputForm 
    handleFormSubmit={handleFormSubmit}
    handletextInputChange={handletextInputChange}
    value={value}
    inputType={inputType}
    setInputType={setInputType}
    />
  )

};

export default TextInputFormContainer;

