const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const events = [
  {
    id: 1,
    name: 'Concert A',
    date: '2025-05-01',
    location: 'New York',
    description: 'An amazing concert with top artists.',
  },
  {
    id: 2,
    name: 'Sports Game B',
    date: '2025-06-15',
    location: 'Los Angeles',
    description: 'Exciting sports action.',
  },
];

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/:id', (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));