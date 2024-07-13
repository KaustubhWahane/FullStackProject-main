import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      console.log(response.data);
      
      navigate('/');
    } catch (error) {
      console.error('Something Happened!', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact">
    <div className="flex justify-center">
      <div className="mt-8 bg-richChocolate py-8 px-4 w-50">
        <h2 className="text-xl font-semibold text-creamyVanilla mb-4">Leave a Feedback</h2>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name" className="block text-creamyVanilla font-pacifico">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your name" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-pacifico p-3" 
        />
        </div>

        <div>
        <label htmlFor="email" className="block text-creamyVanilla font-pacifico">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Your email" 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-pacifico p-3" 
        />
        </div>
  <div>
  <label htmlFor="feedback" className="block text-creamyVanilla font-pacifico">Your Feedback:</label>
  <textarea 
    id="feedback" 
    name="feedback" 
    value={formData.feedback} 
    onChange={handleChange} 
    rows="4" 
    placeholder="Your feedback" 
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-pacifico p-3"
  ></textarea>
</div>

  <div className="text-center mt-5">
    <button type="submit" className="bg-richChocolate text-white py-2 px-4 rounded-md hover:bg-warmBeige font-pacifico">Submit</button>
  </div>
</form>

      </div>
    </div>
    <footer className="bg-richChocolate py-14 mt-5">
  <div className="container mx-auto">
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
        <h4 className="text-white text-2xl mb-8 font-semibold relative font-oswald">Company</h4>
        <ul className="list-none">
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">About us</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Our services</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Privacy policy</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Affiliate program</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
        <h4 className="text-white text-2xl mb-8 font-semibold relative font-oswald">Get help</h4>
        <ul className="list-none">
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">FAQ</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Shipping</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Returns</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Order status</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Payment options</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
        <h4 className="text-white text-2xl mb-8 font-semibold relative font-oswald">Online shop</h4>
        <ul className="list-none">
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Watch</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Bag</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Shoes</a></li>
          <li><a href="#" className="text-creamyVanilla text-lg hover:text-black transition font-oswald">Dress</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  </div>
  );
}

export default ContactUs;
