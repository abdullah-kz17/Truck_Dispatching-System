import React from "react";
import { Link } from "react-router-dom";
import Blogs from "../components/Blogs";
import "./Blogs-page.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Truck Dispatch Services",
      excerpt:
        "Learn the ins and outs of truck dispatch services and how they can benefit your business.",
      author: "John Doe",
      date: "July 28, 2024",
    },
    {
      id: 2,
      title: "Top 5 Tips for Efficient Freight Management",
      excerpt:
        "Discover the top tips for managing your freight efficiently and reducing costs.",
      author: "Jane Smith",
      date: "July 27, 2024",
    },
    {
      id: 3,
      title: "The Future of Trucking: Trends to Watch",
      excerpt:
        "Stay ahead of the curve with the latest trends in the trucking industry.",
      author: "Alice Johnson",
      date: "July 26, 2024",
    },
    {
      id: 4,
      title: "Best Practices for Truck Maintenance",
      excerpt:
        "Ensure your trucks are in top condition with these maintenance best practices.",
      author: "Michael Brown",
      date: "July 25, 2024",
    },
    {
      id: 5,
      title: "How to Optimize Your Fleet Operations",
      excerpt:
        "Learn strategies to optimize your fleet operations and increase efficiency.",
      author: "Emily Davis",
      date: "July 24, 2024",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <header
        className="text-center h-80 flex flex-col justify-center items-center px-4 md:px-52 py-8 bg-primary text-white"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-6">Our Blogs</h1>
        <p className="text-lg">
          Welcome to Alpha Cargo Solutions. We are dedicated to providing
          reliable and efficient transportation and logistics services, ensuring
          your cargo reaches its destination safely and on time.
        </p>
      </header>

      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="latest-posts mb-8">
              <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="latest-post p-4 bg-white shadow rounded-lg mb-4"
                  data-aos="fade-up-right"
                  data-aos-delay={`${index * 100}`}
                >
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-gray-600">{blog.excerpt}</p>
                  <div className="text-gray-500 text-sm">
                    {blog.date} by {blog.author}
                  </div>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-primary mt-2 inline-block"
                  >
                    Read more
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar md:col-span-1" data-aos="fade-left">
            <div className="categories mb-8">
              <h2 className="text-2xl font-bold mb-4">Categories</h2>
              <ul>
                <li>
                  <Link
                    to="/blogs/category/dispatch-tips"
                    className="text-gray-700"
                  >
                    Dispatch Tips
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs/category/truck-maintenance"
                    className="text-gray-700"
                  >
                    Truck Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs/category/industry-news"
                    className="text-gray-700"
                  >
                    Industry News
                  </Link>
                </li>
                {/* Add more categories as needed */}
              </ul>
            </div>

            <div className="tags mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["Dispatch", "Optimization", "Maintenance", "Fleet"].map(
                  (tag, index) => (
                    <Link
                      key={index}
                      to={`/blogs/tag/${tag.toLowerCase()}`}
                      className="tag bg-primary text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="newsletter mb-8">
              <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
              <p className="text-gray-600 mb-4">
                Sign up to get the latest updates and news.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="input-email w-full p-2 mb-2 border rounded-lg"
              />
              <button className="btn-primary w-full p-2 bg-primary text-white rounded-lg">
                Subscribe
              </button>
            </div>

            <div className="author-bios mb-8">
              <h2 className="text-2xl font-bold mb-4">Authors</h2>
              <div className="flex flex-wrap gap-4">
                <div className="author-bio bg-white shadow rounded-lg p-4">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-600">
                    John is a seasoned truck dispatcher with over 10 years of
                    experience...
                  </p>
                </div>
                <div className="author-bio bg-white shadow rounded-lg p-4">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-gray-600">
                    Jane specializes in truck maintenance and fleet
                    management...
                  </p>
                </div>
                {/* Add more authors as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs />
    </>
  );
};

export default BlogsPage;
