const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(level, message) {
  // [warn] 2018-10-23 - La ligne\n
  const line = `[${level}] ${(new Date).toDateString()} - ${message}\n`;
  return fs.appendFile(filePath, line);
}

fs.stat(dirPath)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(dirPath);
    }
    throw err;
  })
  .then(() => log('warn', 'Ligne 1'))
  .then(() => log('warn', 'Ligne 2'))
  .then(() => log('warn', 'Ligne 3'))
  .then(() => 'Done')
  .then((msg) => console.log(msg))
  .catch((err) => {
    console.log(err);
  });


