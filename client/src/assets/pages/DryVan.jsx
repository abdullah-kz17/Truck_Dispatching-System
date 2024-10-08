import DryVanImage from "/images/dryvan.webp"; // Make sure to have an image in the correct path

const DryVanTruck = () => {
  return (
    <>
      <header className="text-center h-80 flex flex-col justify-center align-center px-52 py-8 mb-12 bg-primary text-white">
        <h1 className="text-5xl font-bold  mb-6">Dry Van</h1>
        <p className="text-lg ">
          Welcome to Alpha Cargo Solutions. We are dedicated to providing
          reliable and efficient transportation and logistics services, ensuring
          your cargo reaches its destination safely and on time
        </p>
      </header>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Dry Van Truck Dispatch Services
        </h1>
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={DryVanImage}
              alt="Dry Van Truck"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content Column */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">About Our Services</h2>
            <p className="mb-4 text-gray-700">
              Our dry van truck dispatch services are designed to optimize your
              logistics operations. We specialize in providing reliable and
              efficient dispatch solutions to ensure your cargo is transported
              safely and on time.
            </p>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>Experienced dispatch team with industry expertise</li>
              <li>Real-time tracking and updates</li>
              <li>24/7 customer support</li>
              <li>Competitive pricing and transparent billing</li>
              <li>Extensive network of trusted carriers</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Our Fleet</h2>
            <p className="mb-4 text-gray-700">
              Our fleet of dry van trucks is equipped to handle a variety of
              loads, ensuring the safe and efficient transport of your goods.
              Our trucks are maintained to the highest standards to prevent any
              disruptions during transit.
            </p>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>Secure, weather-resistant cargo space</li>
              <li>Advanced GPS tracking for real-time updates</li>
              <li>Efficient route planning and optimization</li>
              <li>Flexible scheduling to meet your needs</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Ready to streamline your logistics with our dry van truck dispatch
              services? Contact our team today to learn more or to get a
              personalized quote. Email us at
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

export default DryVanTruck;
