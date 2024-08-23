// Presentation Layer

import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";
import {useState} from 'react'


function TextInputForm({handleFormSubmit, handletextInputChange, value, inputType = 'text', setInputType }){

  return (
    <form className='flex items-end'  onSubmit={handleFormSubmit}>
      <div className='flex-1 mr-2'>
      <TextInput label={'enter a word or phrase'} type={inputType} onChange={handletextInputChange} value={value} label='Enter a text'/>
      </div>

      <div>
        <Button 
        styleType={'Warning'}
        text={inputType === 'password' ? 'Show' : 'Hide'}
        onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
      />
      </div>

      <div className='flex'>
         <Button text={'ok'} type={'submit'} styleType={'Primary'}/>
      </div>
    </form>
  );
};

export default TextInputForm;