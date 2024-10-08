import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import avatar from "/images/avatar.png";

const Navbar = () => {
  const { user, isLoggedIn } = useAuth();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="mx-auto flex justify-between items-center py-5 px-12">
        <div className="flex items-center space-x-12">
          <Link to="/">
            <div className="text-3xl font-bold text-primary">
              <i className="bx bxs-truck text-3xl me-1"></i>ACS
            </div>
          </Link>

          <div
            className={`md:flex space-x-6 bg-secondary font-semibold rounded-full px-6 py-2 ${
              isNavbarOpen ? "flex" : "hidden"
            }`}
          >
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-primary">
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="hover:text-primary focus:outline-none"
              >
                Truck Types
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-20">
                  <Link
                    to="/dryvan"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dry Van
                  </Link>
                  <Link
                    to="/flatbed"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Flatbed
                  </Link>
                  <Link
                    to="/reefer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Reefer
                  </Link>
                </div>
              )}
            </div>
            <Link to="/blogs" className="hover:text-primary">
              Blogs
            </Link>
            <Link to="/shipment" className="hover:text-primary">
              Shipments
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="flex items-center border-2 border-primary px-4 py-1.5 rounded-lg"
              >
                <i className="bx bx-user-circle me-1 text-xl"></i>
                <span> Login</span>
              </Link>
              <Link
                to="/signup"
                className=" bg-primary flex items-center text-white border-0 px-4 py-2 rounded-lg"
              >
                <i className="bx bx-user-check me-1 text-xl"></i>
                <span>Register</span>
              </Link>
            </>
          ) : (
            <>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onClick={openModal}
                  className="pl-10 pr-2 py-1 border border-gray-400 rounded-full focus:outline-none w-64"
                />
                <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="hover:text-gray-400 focus:outline-none"
                >
                  <img
                    src={
                      user.profilePicture
                        ? `http://localhost:5010${user.profilePicture}`
                        : avatar
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </button>
                {isProfileDropdownOpen && (
                  <>
                    <div className="absolute right-0 font-semibold mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-20">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </div>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={toggleProfileDropdown}
                    ></div>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <button
          onClick={toggleNavbar}
          className="md:hidden flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <i className="bx bx-menu text-3xl"></i>
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <i className="bx bx-x"></i>
              </button>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-2 py-1 border border-gray-400 rounded-full focus:outline-none w-full"
              />
              <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
            <div className="mt-4">
              <ul>
                {/* Add search results here */}
                <li>Search Result 1</li>
                <li>Search Result 2</li>
                <li>Search Result 3</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
