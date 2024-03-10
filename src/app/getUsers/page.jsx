import { getUsers } from '@/lib/data';
import DeleteButton from './delUser';

const GetUsers = async () => {
    const users = await getUsers();
  return (
    <div className="flex flex-col mx-auto p-10 mt-20 justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-96 bg-white">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Joined</th>
              <th className="py-2 px-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                      <td className="py-2 px-3 border-b border-gray-300">{user.username}</td>
                  <td className="py-2 px-3 border-b border-gray-300">{user.email}/</td>
                  <td className="py-2 px-3 border-b border-gray-300">{user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Loading...'}</td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    <DeleteButton userId={user.id} />
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
  );
}

export default GetUsers