const fs = require('fs');

const updateFile = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data));
}

export default updateFile
