import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import './styles/index.css';

function App() {
  const location = useLocation();
  const isLibrary = location.pathname === '/library';

  return (
    <div className="App">
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </div>
  );
}

// Corrected App structure to avoid duplicate rendering
const AppContainer = () => {
  const location = useLocation();
  const isLibrary = location.pathname === '/library';

  if (isLibrary) {
    return <Library />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes if needed */}
      </Routes>
    </Layout>
  );
};

export default AppContainer;
