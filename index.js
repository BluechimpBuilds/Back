const express = require('express');
const cors = require('cors');
const { searchExa } = require('./actions/exa-actions');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const result = await searchExa(query);
    res.json(result);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'An error occurred during the search' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
