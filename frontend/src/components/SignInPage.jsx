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
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> {/* Change htmlFor and label text */}
            <input
              type="text" 
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
              autoComplete="current-password"
            />
          </div>
          <div className="mt-3"> 
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
