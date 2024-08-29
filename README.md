# Hangman Game

Welcome to the **Hangman Game**! This project is a fun and interactive word-guessing game built using React, React Router DOM, and Vite. The game allows players to guess letters of a hidden word, with a limited number of incorrect guesses before the game ends.

## Features

- **Interactive Gameplay**: Players can click letters to guess the hidden word.
- **Responsive Design**: The game adapts to different screen sizes, though it is best experienced on larger screens.
- **Route-Based Navigation**: The game uses React Router DOM for smooth navigation between different routes (e.g., game, menu).
- **Game Over Screen**: Displays a "You Win" or "Game Over" message based on the player's performance.

## Tech Stack

- **Vite**: Used for blazing-fast project setup and development.
- **React**: For building the user interface and handling state management.
- **React Router DOM**: For implementing navigation between different views within the application.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohitKhubchandani/Hangman.git
   cd Hangman
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the game**:
   - Go to `localhost` in your browser.

## How to Play

1. **Start the Game**: Navigate to the game page.
2. **Guess Letters**: Click on letters to guess them. Correct guesses reveal parts of the hidden word.
3. **Win or Lose**: The game ends when the word is fully guessed or the player runs out of attempts.

## Screen Size Restriction

- **Important**: This game is designed to be played on devices with screens larger than 1200 pixels. A message will appear if the game is accessed on a smaller screen.

