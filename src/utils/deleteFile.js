const fs = require('fs');
const path = require('path');

const deleteFile = (photoUrl) => {
  return new Promise((resolve, reject) => {
    const photoPath = path.join(__dirname, '../../uploads', path.basename(photoUrl));
    fs.unlink(photoPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  deleteFile,
};