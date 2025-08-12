import { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import Breakfast from './RestaurantListing/Breakfast/Breakfast';
import Lunch from './RestaurantListing/Lunch/Lunch';
import { restaurantData } from './RestaurantListing/Breakfast/Data';
import { restaurantLunch } from './RestaurantListing/Lunch/Data';
import LoaderComponent from './LoaderComponent';
import axios from 'axios';

function Home() {
  const [mealData, setMealData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log('Add clicked:', item);
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    console.log('Cart updated:', cartItems);
  }, [cartItems]);

  async function fetchData() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const result = await response.json();
      setMealData(result?.meals);
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError(
        <div>
          <h1 className='text-center text-4xl text-black'>Oops! Sorry couldn&apos;t show the dishes!</h1>
        </div>
      );
    }
    finally {
      setLoading(false);
    }
  }

  const aggregateCartItems = (cartItems) => {
    return cartItems.reduce((acc, item) => {
      const existing = acc.find(i => i.idMeal === item.idMeal);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
  };

  const handleSubmit = async () => {
    try {
      const aggregatedItems = aggregateCartItems(cartItems);

      await axios.post('http://localhost:5000/api/order', { items: aggregatedItems });

      alert('Order placed successfully!');
      setCartItems([]); // Clear cart after successful order
    } catch (err) {
      console.error('Order submission error:', err);
      alert('Failed to place order');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return (
      <div id="home" className="bg-richChocolate">
        <h2 className="text-center font-extrabold text-creamyVanilla bg-red-700">Home Page</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div id="home" className="bg-richChocolate">
      <ImageSlider />
      <br /> <br />
      <div>
        <h1 className="text-creamyVanilla text-center text-custom text-4xl p-3">
          Here&apos;s the various International food in a simplified way!
        </h1>
        {/* Cart Items */}
        <div className="text-creamyVanilla text-center my-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart Items:</h2>
          <ul>
            {aggregateCartItems(cartItems).length === 0 ? (
              <li>No items added yet.</li>
            ) : (
              aggregateCartItems(cartItems).map(item => (
                <li key={item.idMeal}>
                  {item.strMeal} x {item.quantity}
                </li>
              ))
            )}
          </ul>
          <button
            onClick={handleSubmit}
            disabled={cartItems.length === 0}
            className="mt-4 bg-richChocolate hover:bg-warmBeige text-creamyVanilla font-pacifico px-4 py-2 rounded disabled:opacity-50"
          >
            Submit Order
          </button>
        </div>
        <div className="flex flex-wrap justify-around items-center">
         {mealData?.filter(meal => meal.strMeal?.trim().toLowerCase() !== 'kuurdak').map((meal) => (
    <div key={meal?.idMeal} className="border border-black p-4 m-4 w-64 h-96 rounded-lg flex flex-col items-center">
      <div className="w-full">
        <img src={meal?.strMealThumb} alt={meal?.strMeal} className="w-full rounded-t-lg" />
      </div>
      <div className="mt-2 font-bold text-creamyVanilla">{meal?.strMeal}</div>
      <div className="text-creamyVanilla">{meal?.strCategory}</div>
      <button
        className="mt-2 bg-richChocolate hover:bg-warmBeige text-creamyVanilla px-4 py-2 rounded"
        onClick={() => addToCart(meal)}
      >
        Add
      </button>
    </div>
  ))}

          
        </div>
      </div>

      {/* Render Breakfasts */}
      <h1 className="bg-richChocolate font-pacifico text-creamyVanilla text-center text-custom text-4xl p-3">
        Grab your Breakfast!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {restaurantData?.map((data, index) => (
          <Breakfast key={index} {...data} />
        ))}
      </div>

      {/* Render Lunch */}
      <h1 className="bg-richChocolate font-pacifico text-creamyVanilla text-center text-custom text-4xl p-3">
        What&apos;s for dinner?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {restaurantLunch?.map((data, index) => (
          <Lunch key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
