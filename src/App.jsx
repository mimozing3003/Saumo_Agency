import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Agence from './pages/Agence';
import ProjectDetail from './pages/ProjectDetail';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<Agence />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
