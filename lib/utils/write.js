const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "../dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// writing files
const writeFile = (thisPage) => {
  return new Promise((resolve, reject) => {
    fs.writeFileSync(outputPath, thisPage, err => {
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

module.exports = writeFile;