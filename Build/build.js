const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function deleteAndCreateDist() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = '';
  for (const buffer of buffers) {
    content += buffer.toString();
  }

  if (argv.prod) {
    content = UglifyJS.minify(content).code;
  }

  fs.writeFile(appJsDistPath, content);
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  content = content.replace(/<script.*><\/script>/s, '<script src="./app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);
}

async function build() {
  await deleteAndCreateDist();

  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);

  console.log('Done');
}

build()
  .catch((err) => console.log(err));
