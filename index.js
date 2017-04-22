const start = new Date().getTime();
const fs = require('fs');
const Table = require('./Table');

const path = process.argv[2];

const getSource = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

getSource.then(data => {
    const table = new Table(data);
    table.draw();
    const end = new Date().getTime();
    console.log(`${end} - ${start} = ${end - start}`)
});
