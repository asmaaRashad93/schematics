const fs = require('fs');
const path = require('path');

const directories = [
  'dist/custom-module/files/controllers',
  'dist/custom-module/files/services',
  'dist/custom-module/files/dtos',
  'dist/custom-module/files/entities',
  'dist/custom-module/files/repositories',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});
