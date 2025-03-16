import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home/HomePage';
import ReservationPage from './pages/reservation/ReservationPage'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/reserve-table" element={<ReservationPage/>}/>
      </Routes>
  );
}

export default App;
