import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import RsvpPage from './routes/RsvpPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rsvp" element={<RsvpPage />} />
    </Routes>
  );
}
