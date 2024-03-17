const fs = require('fs');

// Creating welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', err => {
    if (err) throw err;
    console.log('welcome.txt has been created!');
});

// Reading and logging data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});