const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 5000;
let TARGET_VALUE = 20; // Predefined target value

let winner = null;

const generateHash = (nonce) => {
  // Convert nonce to a string
  const nonceString = nonce.toString();
  // Get the sum of ASCII values of all characters in the nonce string
  let sum = 0;
  for (let i = 0; i < nonceString.length; i++) {
      sum += nonceString.charCodeAt(i);
  }
  // Take the sum modulo 100000 to ensure a 5-digit hash value
  const hash = sum % 100000;
  // Convert the hash to a string and split it into two parts
  const hashString = hash.toString();
  const midIndex = Math.floor(hashString.length / 2);

  // Get two random characters to add to the middle of the hash
  const randomChar1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
  const randomChar2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter

  // Insert the random characters into the middle of the hash string
  const modifiedHash = hashString.slice(0, midIndex) + randomChar1 + randomChar2 + hashString.slice(midIndex);

  return modifiedHash;
};

// WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('New client connected');
  
  // Handle incoming messages from clients
  ws.on('message', function incoming(message) {
    const number = parseInt(message);
    TARGET_VALUE = generateHash(number)
  console.log(number,TARGET_VALUE);
  let c = 0;

  for (let i = 0; i < TARGET_VALUE.length; i++) {
    if (!isNaN(parseInt(TARGET_VALUE[i]))) {
      c += parseInt(TARGET_VALUE[i]);
    }
  }



    if (!isNaN(number) && winner === null) {
      if (c<=5) {
        console.log(number);
        // Set the winner to the current user
        winner = ws;
        
        // Notify the winner
        ws.send('Congratulations! You won the game!');
        // Notify all other users that they lost the game
        wss.clients.forEach(client => {
          if (client !== winner && client.readyState === WebSocket.OPEN) {
            client.send('Sorry, you lost the game!');
          }
        });
      }else{
        winner = ws;
        ws.send(" ")
        ws.send('Hash is not in the targeted area');
        

      }
    }
  });
  
  // Handle client disconnection
  ws.on('close', function close() {
    console.log('Client disconnected');
    // If the winner disconnects, reset the winner
    if (winner === ws) {
      winner = null;
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
