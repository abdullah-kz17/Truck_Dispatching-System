import ReeferImage from "/images/reefer.webp";
const Reefer = () => {
  return (
    <>
      <header className="text-center h-80 flex flex-col justify-center align-center px-52 py-8 mb-12 bg-primary text-white">
        <h1 className="text-5xl font-bold mb-6">Reefer</h1>
        <p className="text-lg ">
          Welcome to Alpha Cargo Solutions. We are dedicated to providing
          reliable and efficient transportation and logistics services, ensuring
          your cargo reaches its destination safely and on time
        </p>
      </header>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
        <h1 className="text-4xl text-primary font-bold mb-8">
          Reefer Truck Dispatch Services
        </h1>
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Column */}
          <div className="md:w-1/2">
            <img
              src={ReeferImage}
              alt="Reefer Truck"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content Column */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">About Our Services</h2>
            <p className="mb-4 text-gray-700">
              Our reefer truck dispatch services are tailored to meet the unique
              needs of temperature-sensitive cargo. We ensure that your
              perishable goods are transported under the optimal conditions to
              maintain their quality.
            </p>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>
                Expert dispatch team with knowledge in refrigerated transport
              </li>
              <li>Real-time temperature monitoring and updates</li>
              <li>24/7 customer support</li>
              <li>Competitive pricing with no hidden fees</li>
              <li>Extensive network of reliable carriers</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Our Fleet</h2>
            <p className="mb-4 text-gray-700">
              Our fleet of reefer trucks is equipped with the latest
              refrigeration technology, ensuring that your cargo is kept at the
              required temperature throughout the journey.
            </p>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              <li>State-of-the-art refrigeration units</li>
              <li>Advanced GPS tracking and monitoring</li>
              <li>Efficient route planning to minimize transit time</li>
              <li>Flexible scheduling options</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              For reliable reefer truck dispatch services, contact us today.
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
export default Reefer;
