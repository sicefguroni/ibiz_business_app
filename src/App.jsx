import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/userPages/HomePage';
import GuidesPage from './pages/userPages/GuidesPage';
import TrainingsPage from './pages/userPages/TrainingsPage';
import LoansPage from './pages/userPages/LoansPage';
import CommunityPage from './pages/userPages/CommunityPage';
import FeasibilityPage from './pages/feasibility_page/FeasibilityPage';
import Onboarding from './pages/Onboarding';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/feasibility" element={<FeasibilityPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App
