const fs = require('fs');

//copy functioning images to the specified project folder
const copyFile = function(projectTitle) {
  return new Promise((resolve, reject) => {
    const fromFile = `../dist/assets/css/#style.css`;
    const toFile = `../dist/${projectTitle}/assets/css/#style.css`;
    fs.copyFile(fromFile, toFile, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true,
              message: 'supporting stylesheet copied!'
          });
      });
  });
};

// writing files
const writeFile = (thisPage, projectTitle) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`../dist/${projectTitle}/index.html`, thisPage, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports = { writeFile, copyFile };


