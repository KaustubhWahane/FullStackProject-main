import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function NavBar({isSignedIn, onSignIn, onSignOut}) {
  const navigate = useNavigate();

   function handleSignInClick ()  {
    if (isSignedIn) {
      onSignOut();
      navigate(-1);
    } else {
      onSignIn();
      navigate('/signin'); 
    }
  }

  return (
    <>
      {/* This is for Font */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </Helmet>
      <nav className="flex justify-between items-center mx-auto bg-richChocolate">
        <div className="flex">
          <div className="flex items-center py-3 gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]" onClick={handleSignInClick}>
              {isSignedIn ? 'Back' : 'Sign In'}
            </button>
            <ion-icon onclick="onToggleMenu(this)" name="menu" className="text-3xl cursor-pointer md:hidden"></ion-icon>
          </div>
          <div className="nav-links duration-500 md:static absolute bg-richChocolate md:min-h-fit min-h-[60vh] right-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-end md:gap-[4vw] gap-8 justify-end text-creamyVanilla">
              <li>
                <a className="hover:text-warmBeige" href='/'>Home</a>
              </li>
              <li>
                <a className="hover:text-warmBeige" href='/about'>About</a>
              </li>
              <li>
                <a className="hover:text-warmBeige" href='/contact'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-4xl font-bold font-oswald'>Welcome to the Cooking Website</h1>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  scrollToSection: PropTypes.func,
  isSignedIn: PropTypes.bool.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};