import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://onchain-ticketing.onrender.com/api/events')
      .then((res) => setEvents(res.data))
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <Link
              to={`/event/${event.id}`}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;