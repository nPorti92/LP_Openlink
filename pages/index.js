import React from 'react';
import { ConfigProvider } from 'antd';
import LandingPage from '../src/components/LandingPage';

export default function Home() {
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
