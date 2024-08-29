import {Link} from 'react-router-dom'

function YouWin(){
  return (
    <>
    <div className="text-center">
          <h2 className="text-6xl font-extrabold text-green-600">You Win!</h2>
          <Link to={'/'}
            className="text-4xl font-extrabold text-red-500 bg-clip-text bg-gradient-to-r bg-violet-400 transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 hover:underline hover:text-black block mt-5" 
            
          >
            Play Again
          </Link>
        </div>
    </>
  )
}

export default YouWin;