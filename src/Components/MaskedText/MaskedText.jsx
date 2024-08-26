import { getAllCharacters } from './MaskedTextUtility'
 
function MaskedText({text, usedLetters}){
  const letters = getAllCharacters(text, usedLetters).split('')
  
  return(
    <>
  <div className="flex justify-center items-center mt-4">
  {letters.map((letter, index) => {
    return (
      <span
        key={`letter-${index}`}
        className="inline-block mx-5 text-4xl m-10 font-extrabold text-center transform bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text"
      >
        {letter}
      </span>
    );
  })}
</div>

    </>
  )
};


export default MaskedText;