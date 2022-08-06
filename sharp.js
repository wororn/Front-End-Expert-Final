const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/public/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach(image => {

    sharp(`${target}/${image}`)
      .resize(320)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-exSmall.jpg`));

    sharp(`${target}/${image}`)
      .resize(468)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
          .slice(0, -1)
          .join('.')}-Small.jpg`));

    sharp(`${target}/${image}`)
      .resize(660)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-Middle.jpg`));

    sharp(`${target}/${image}`)
      .resize(768)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-Medium.jpg`));

    sharp(`${target}/${image}`)
      .resize(990)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-exMedium.jpg`));

    sharp(`${target}/${image}`)
      .resize(1024)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-Large.jpg`));

    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-exLarge.jpg`));
  });
