const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(level, message, cb) {
  // [warn] 2018-10-23 - La ligne\n
  const line = `[${level}] ${(new Date).toDateString()} - ${message}\n`;
  fs.appendFile(filePath, line, cb);
}


fs.stat(dirPath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, (err) => {
      if (err) {
        return console.log(err);
      }
      next();
    });
  }
  if (err) {
    return console.log(err);
  }
  next();
});

// callback hell / pyramid of doom
function next() {
  log('warn', 'Ligne 1', (err) => {
    if (err) {
      return console.log(err);
    }
    log('warn', 'Ligne 2', (err) => {
      if (err) {
        return console.log(err);
      }
      log('warn', 'Ligne 3', (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Done');
      });
    });
  });
}
