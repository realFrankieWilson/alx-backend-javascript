// full_server/utils.js
import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentField = {};

    lines.slice(1).forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!field || !firstName) return;

      if (!studentField[field]) {
        studentField[field] = [];
      }
      studentField[field].push(firstName);
    });

    return studentField;
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
    } else if (err.code === 'EACCES') {
      console.error(`Permission denied: ${filePath}`);
    } else {
      throw new Error('An error occured:', err.message);
    }
    return null;
  }
};

export default readDatabase;
