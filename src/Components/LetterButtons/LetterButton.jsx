const Alphabets = new Array(26).fill('').map((element, index) => String.fromCharCode(65 + index))

function LetterButtons({ usedLetters, onLetterClick }){

  const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

  const buttonStyle = function(letter){
    if(selectedLetters.has(letter)){
      return "bg-gray-400 text-white font-bold py-2 px-4 rounded m-1 shadow-md cursor-not-allowed"
    }else{
      return ' black-white font-bold py-2 px-4 rounded m-1 shadow-md transition duration-300 ease-in-out hover:bg-blue-700 active:scale-95'
    }
  }

  function handleClick(event){
    const character = event.target.value;
    onLetterClick?.(value)
  }

  const buttons = Alphabets.map(letter => {
  return(
    <>
    <button 
    key={`button-${letter}`}
    value={letter}
    disabled={selectedLetters.has(letter)}
    onClick={handleClick}
    className={`h-12 w-12 ${buttonStyle(letter)}`} >{letter}</button>
    </>
  )}) 
  
  return(
    <>
    {buttons}
    </>
  )

}

export default LetterButtons