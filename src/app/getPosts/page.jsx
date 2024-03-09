import PostUser from '@/components/postUser/postUser';
import DeleteButton from './delBtn';
import { getPosts } from '@/lib/data';
import GetUsers from '../getUsers/page';

const GetPosts = async () => {
    const posts = await getPosts();
    return (
      <>
    <div className="flex flex-col mx-auto p-10 mt-20 justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">Admin Panel - Manage Posts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-96 bg-white">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Title</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Author</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Published</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <tr key={post.id}>
                  <td className="py-2 px-3 border-b border-gray-300">{post.title}</td>
                  <td className="py-2 px-3 border-b border-gray-300"><PostUser userId={post.userId}/></td>
                  <td className="py-2 px-3 border-b border-gray-300">{post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Loading...'}</td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    <DeleteButton postId={post.id} />
                  </td>
                </tr>
              ))
            ) : (
              <p>No posts found</p>
            )}
          </tbody>
        </table>
      </div>
      </div>
      
            <GetUsers />
            </>
  );
}

export default GetPosts