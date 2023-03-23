import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(config);

const initialPlayerRating = 1500;

function GlickoRatingSystem() {
  const [player1Rating, setPlayer1Rating] = useState(initialPlayerRating);
  const [player2Rating, setPlayer2Rating] = useState(initialPlayerRating);

  useEffect(() => {
    // Retrieve the initial player ratings from Firebase
    firebase
      .database()
      .ref('players')
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        setPlayer1Rating(data.player1.rating || initialPlayerRating);
        setPlayer2Rating(data.player2.rating || initialPlayerRating);
      });
  }, []);

  const handleWinner = (winner) => {
    // Update the player ratings using the Glicko algorithm
    const Glicko = require('glicko2').Glicko2;
    const glicko = new Glicko();
    const player1 = glicko.makePlayer(player1Rating);
    const player2 = glicko.makePlayer(player2Rating);
    if (winner === 'player1') {
      player1.win(player2);
    } else if (winner === 'player2') {
      player2.win(player1);
    }
    setPlayer1Rating(player1.getRating());
    setPlayer2Rating(player2.getRating());

    // Update the player ratings in Firebase
    firebase
      .database()
      .ref('players')
      .update({
        player1: {
          rating: player1Rating,
        },
        player2: {
          rating: player2Rating,
        },
      });
  };

  return (
    <div>
      <button onClick={() => handleWinner('player1')}>Player 1 wins</button>
      <button onClick={() => handleWinner('player2')}>Player 2 wins</button>
      <p>Player 1 rating: {player1Rating}</p>
      <p>Player 2 rating: {player2Rating}</p>
    </div>
  );
}

export default GlickoRatingSystem;
