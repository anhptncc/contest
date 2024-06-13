const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// File path to store results
const resultsFilePath = path.join(__dirname, 'results.txt');

// Endpoint to handle addition results
app.post('/api/addition', (req, res) => {
  const result = req.body.result;

    // Prepare the data to be written to the file
    const data = `Result: ${result}\n`;

    // Append the result to the file
    fs.appendFile(resultsFilePath, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      console.log('Received result:', result);
      res
        .status(200)
        .json({ message: 'Result received and written to file successfully' });
    });

});

app.get('/api', (req, res) => { 
    res.status(200).json({ message: 'Hello World' });
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
