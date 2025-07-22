import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'User',
    joined: 'July 2025'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-white-500 to-pink-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-full max-w-md text-white">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Name</h2>
            <p>{user.name}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <p>{user.email}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Role</h2>
            <p>{user.role}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Joined</h2>
            <p>{user.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
