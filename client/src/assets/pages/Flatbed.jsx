import FlatbedImage from "/images/flatbed-truck3.webp";
const Flatbed = () => {
  return (
    <>
      <header className="text-center h-80 flex flex-col justify-center align-center px-52 py-8 mb-12 bg-primary text-white">
        <h1 className="text-5xl font-bold  mb-6"> Flatbed</h1>
        <p className="text-lg ">
          Welcome to Alpha Cargo Solutions. We are dedicated to providing
          reliable and efficient transportation and logistics services, ensuring
          your cargo reaches its destination safely and on time
        </p>
      </header>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
        <h1 className="text-4xl text-primary font-bold mb-8">
          Flatbed Truck Dispatch Services
        </h1>
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={FlatbedImage}
              alt="Flatbed Truck"
              className="object-contain w-full h-full"
            />
          </div>
          {/* Content Column */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">About Our Services</h2>
            <p className="mb-4 text-gray-700">
              Our flatbed truck dispatch services are ideal for transporting
              oversized or irregularly shaped cargo. We provide efficient and
              secure flatbed transport solutions to meet your unique logistics
              needs.
            </p>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>
                Experienced dispatch team with expertise in flatbed transport
              </li>
              <li>Real-time tracking and updates</li>
              <li>24/7 customer support</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Wide network of trusted carriers</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Our Fleet</h2>
            <p className="mb-4 text-gray-700">
              Our fleet of flatbed trucks is equipped to handle a variety of
              cargo, ensuring safe and efficient transport. Our trucks are
              regularly maintained to meet the highest standards.
            </p>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>Secure and versatile flatbed trailers</li>
              <li>Advanced GPS tracking for real-time updates</li>
              <li>Efficient route planning and optimization</li>
              <li>Flexible scheduling to meet your needs</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For reliable flatbed truck dispatch services, contact us today.
              Email us at
              <a
                href="mailto:sales@example.com"
                className="text-primary hover:underline ml-1"
              >
                sales@example.com
              </a>{" "}
              or call us at (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Flatbed;
