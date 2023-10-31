import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CertificatesPage from './components/CertificatesPage/CertificatesPage';
import AuthPage from './components/AuthPage/AuthPage';
import HelloPage from './components/HelloPage/HelloPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/certificates/data" element={<CertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
