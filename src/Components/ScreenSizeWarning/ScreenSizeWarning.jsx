import { Link } from 'react-router-dom';

function ScreenSizeWarning() {
  return (
    <div className="text-center mt-20 bg-purple-700 text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-yellow-300 animate-pulse">Oops! Screen Too Small!</h1>
      <p className="text-2xl mt-6">Looks like your screen is too small for this adventure! 🕹️</p>
      <p className="text-xl mt-2">Switch to a larger screen (greater than 1200 pixels) to enjoy the fun.</p>
      <Link 
        to="/" 
        className="inline-block mt-10 px-8 py-4 text-lg font-bold text-purple-700 bg-yellow-300 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-400"
      >
        Take Me Home
      </Link>
    </div>
  );
}

export default ScreenSizeWarning;
