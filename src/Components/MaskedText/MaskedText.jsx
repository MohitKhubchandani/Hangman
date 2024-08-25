import { getAllCharacters } from './MaskedTextUtility'
 
function MaskedText({text, usedLetters}){
  const letters = getAllCharacters(text, usedLetters).split('')
  
  return(
    <>
    {letters.map((letter,index) => {
      return (
        <span key={`letter-${index}`} className='inline-block'>{letter}</span>
      )
     })}
    </>
  )
};


export default MaskedText;