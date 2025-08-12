import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInPage() {
  const [formData, setFormData] = useState({
    name: '', 
    password: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/signin', formData);

      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.error('Error signin in:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full p-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-indigo-900">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-indigo-700">Name</label>
            <input
              type="text" 
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 border border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoComplete="username"
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-indigo-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-3 border border-indigo-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}


export default SignInPage;
