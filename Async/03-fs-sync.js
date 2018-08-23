const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(level, message) {
  // [warn] 2018-10-23 - La ligne\n
  const line = `[${level}] ${(new Date).toDateString()} - ${message}\n`;
  fs.appendFileSync(filePath, line);
}

function createDirIfNotExists(dirPath) {
  try {
    const stats = fs.statSync(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      return fs.mkdirSync(dirPath);
    }
    throw err;
  }
}

try {
  createDirIfNotExists(dirPath);

  log('warn', 'Ligne 1');
  log('warn', 'Ligne 2');
  log('warn', 'Ligne 3');
}
catch (err) {
  console.log(err);
}
