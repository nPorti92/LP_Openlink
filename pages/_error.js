function Error({ statusCode }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>{statusCode === 404 ? 'Page not found' : 'An unexpected error has occurred'}</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
