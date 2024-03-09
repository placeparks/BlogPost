"use client"
import { deleteUser } from '@/lib/action';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ userId }) => {
    const router = useRouter(); 

    const handleDelete = async () => {
      const confirmed = window.confirm('Are you sure you want to delete this post?');
      if (confirmed) {
        const response = await deleteUser({ id: userId });
        if (response.error) {
          alert('Error deleting post: ' + response.error);
        } else {
          alert('User deleted successfully');
          window.location.reload();
        }
      }
    };
  
    return (
      <button
        type="button"
        onClick={handleDelete} 
        className="text-red-600 hover:text-red-900 mx-2"
      >
        Delete
      </button>
    );
};

export default DeleteButton;
