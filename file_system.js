// console.log('Hello from Node.js');

// fs maksudnya file system
const fs = require('fs');

//memanggil objek fs dengan fungsi writeFileSync('nama file', 'isi file');
fs.writeFileSync('hello.txt', 'Hello from Node.js');