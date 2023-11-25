const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(database);
    if (data) {
      const formatedData = data.join('\n');
      response.send(`This is the list of our students\n${formatedData}`);
    } else {
      response.status(500).send('No student data available.');
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    response.status(500).send('There was an error.');
  }
});

app.listen(port);

module.exports = app;
