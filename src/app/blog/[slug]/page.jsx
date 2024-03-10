// page.jsx
import SinglePostPageWrapper from "./SinglePostPageWrapper";
import SinglePostPage from "./SinglePostPage";

const Page = ({ params }) => {
  return (
    <SinglePostPageWrapper>
      <SinglePostPage params={params} />
    </SinglePostPageWrapper>
  );
};

export default Page;
