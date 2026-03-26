import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Portfolio from './pages/Portfolio';
import Historia from './pages/Historia';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/historia" element={<Historia />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;