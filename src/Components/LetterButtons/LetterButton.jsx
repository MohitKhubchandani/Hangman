const Alphabets = new Array(26).fill('').map((element, index) => String.fromCharCode(65 + index))

function LetterButtons({ text, usedLetters, onLetterClick }){

  const orignalCharacters = new Set(text.toUpperCase().split(''))

  const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

  const buttonStyle = function(letter){
    if(selectedLetters.has(letter)){
      return `${orignalCharacters.has(letter) ? `bg-green-400 text-white font-bold py-2 px-4 rounded m-1 shadow-md` : `bg-gray-400 text-white font-bold py-2 px-4 rounded m-1 shadow-md cursor-not-allowed`}`
    }else{
      return 'black-white font-bold py-2 px-4 rounded m-1 shadow-md transition duration-300 ease-in-out hover:bg-blue-700 active:scale-95'
    }
  }

  function handleClick(event){
    const character = event.target.value;
    onLetterClick?.(character)
  }


  const buttons = Alphabets.map(letter => {
    return (
      <button 
        key={`button-${letter}`}
        value={letter}
        disabled={selectedLetters.has(letter)}
        onClick={handleClick}
        className={`h-12 w-12 ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });
  
  return (
    <div className="flex justify-center" >
      <div className="flex w-1/2 flex-wrap justify-center ">
        {buttons}
      </div>
    </div>
  );  
}

export default LetterButtons