import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`https://onchain-ticketing.onrender.com/api/events/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error('Error fetching event:', err));
  }, [id]);

  if (!event) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <Link
        to={`/purchase/${event.id}`}
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Buy Tickets
      </Link>
    </div>
  );
}

export default EventDetails;