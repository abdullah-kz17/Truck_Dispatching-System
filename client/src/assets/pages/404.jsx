import { Link } from 'react-router-dom';
import notFound from "/images/404.png"

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center flex flex-col justify-center items-center">
        {/* <h1 className="text-9xl font-bold text-primary">404</h1> */}
        <img src={notFound} alt="404 page" height={400} width={400} className='mix-blend-multiply '/>
        <p className="text-2xl font-medium text-gray-600 mb-6">Oops! Page not found</p>
        <p className="text-lg text-gray-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="px-4 py-2 bg-primary text-white rounded-full ">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
