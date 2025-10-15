export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ marginTop: '20px', color: '#313b49' }}>Go back home</a>
    </div>
  );
}
