const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(level, message) {
  // [warn] 2018-10-23 - La ligne\n
  const line = `[${level}] ${(new Date).toDateString()} - ${message}\n`;
  return fs.appendFile(filePath, line);
}



async function createDirIfNotExists(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      return await fs.mkdir(dirPath);
    }
    throw err;
  }
}

(async () => {

  try {
    await createDirIfNotExists(dirPath);

    await log('warn', 'Ligne 1');
    await log('warn', 'Ligne 2');
    await log('warn', 'Ligne 3');
    console.log('Done');
  }
  catch (err) {
    console.log(err);
  }

})();
