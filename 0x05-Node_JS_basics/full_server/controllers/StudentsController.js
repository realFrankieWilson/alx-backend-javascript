// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];

    try {
      const studentField = await readDatabase(dbFile);
      const responseLines = ['This is the list of our students'];

      Object.keys(studentField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const studentList = studentField[field];
          responseLines.push(`Number of students in ${field}: ${studentList.length}.
            List: ${studentField.join(', ')}`);
        });

      return res.status(200).send(responseLines.join('\n'));
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentField = await readDatabase(dbFile);
      const studentList = studentField[major] || [];
      return res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
