import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HealthCheck } from './pages/HealthCheck';
import { DietExercise } from './pages/DietExercise';
import { Tips } from './pages/Tips';
import { DoctorAdvice } from './pages/DoctorAdvice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-check" element={<HealthCheck />} />
        <Route path="/diet-exercise" element={<DietExercise />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/doctor-advice" element={<DoctorAdvice />} />
      </Routes>
    </Router>
  );
}

export default App;