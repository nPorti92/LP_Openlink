import React from 'react';
import { ConfigProvider } from 'antd';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#313b49',
          borderRadius: 12,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        },
      }}
    >
      <div className="App">
        <LandingPage />
      </div>
    </ConfigProvider>
  );
}

export default App; 