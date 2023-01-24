const request = require('request');
const fs = require('fs');

const url = 'http://www.google.com';
const filePath = 'google-homepage.html';

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
    console.log(`Google homepage saved`);
  });
});


request('https://img.freepik.com/free-vector/background-with-sketches-travel_23-2147557362.jpg?w=2000&t=st=1674543611~exp=1674544211~hmac=7c6c5f70953812ee5c4051bf909f04b73fb74faaebd0313b168c60af6bd563fc').pipe(fs.createWriteStream('./doodle.png'));
