import { getUser } from "@/lib/data";

const PostUser = async ({ userId }) => {
  let userContent;

  try {
    const user = await getUser(userId);
    userContent = <p className="text-lg font-semibold">{user.username}</p>;
  } catch (error) {
    console.error(error);
    userContent = <p>Failed to load user details.</p>;
  }

  return <div>{userContent}</div>;
};

export default PostUser;
