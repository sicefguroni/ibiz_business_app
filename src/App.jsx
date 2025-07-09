import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeasibilityPage from './pages/feasibility_page/page';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeasibilityPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App
