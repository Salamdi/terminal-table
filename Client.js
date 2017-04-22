const http = require('http');
const fs = require('fs');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    method: 'GET',
    path: '/users'
  };

const req = http.request(options, (response) => {
    let string = '';
    response.on('data', (chunk) => {
        console.log(chunk);
        fs.writeFile('./file.json', string);
    });
    
});

req.end();