const fs = require('fs').promises;

// Write data using Promise
fs.writeFile('sample.txt', 'Welcome to Node.js')
  .then(() => {
    console.log('Data written successfully.');

    // Read data using Promise
    return fs.readFile('sample.txt', 'utf8');
  })
  .then((data) => {
    console.log('File Content:', data);
  })
  .catch((err) => {
    console.log('Error:', err);
  });