import { Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import TicketPurchase from './components/TicketPurchase';
import WalletConnect from './components/WalletConnect';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <WalletConnect />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/purchase/:id" element={<TicketPurchase />} />
      </Routes>
    </div>
  );
}

export default App;