const Error = ({ error }) => {
  return (
    <p
      style={{
        fontSize: 'large',
      }}
    >
      Sorry. {error}. Try one more time.
    </p>
  );
};

export default Error;