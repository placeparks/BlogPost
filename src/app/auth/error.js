// pages/auth/error.js
export default function Error({ error }) {
  // Render the error code or message
  return (
    <div>
      <h1>An error occurred</h1>
      <p>{error}</p>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Pass the error code to the page via props
  return { props: { error: context.query.error } };
}
