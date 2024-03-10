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

export async function getServerSideProps(context) {
  console.log("Error from context:", context.query.error);
  return { props: { error: context.query.error } };
}
