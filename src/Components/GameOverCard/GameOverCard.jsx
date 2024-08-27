import React from 'react';

function GameOverCard({ onTryAgain }) {
    return (
      <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Game Over</h2>
        <p className="text-gray-600 mb-6">You've used all your guesses. Better luck next time!</p>
        <button 
          onClick={onTryAgain} 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try Again
        </button>
      </div>
    );


}

export default GameOverCard;
