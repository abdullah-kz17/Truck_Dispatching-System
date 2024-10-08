import { Link } from "react-router-dom";
import blog1 from "/images/blog1.jpg";
import blog2 from "/images/blog2.png";
import blog3 from "/images/blog3.jpg";
import "./Blogs.scss";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Truck Dispatch Services",
      description:
        "Learn the ins and outs of truck dispatch services and how they can benefit your business.",
      image: blog1,
      username: "John Doe",
      date: "July 28, 2024",
      comments: 12,
    },
    {
      id: 2,
      title: "Top 5 Tips for Efficient Freight Management",
      description:
        "Discover the top tips for managing your freight efficiently and reducing costs.",
      image: blog2,
      username: "Jane Smith",
      date: "July 27, 2024",
      comments: 8,
    },
    {
      id: 3,
      title: "The Future of Trucking: Trends to Watch",
      description:
        "Stay ahead of the curve with the latest trends in the trucking industry.",
      image: blog3,
      username: "Alice Johnson",
      date: "July 26, 2024",
      comments: 5,
    },
  ];

  return (
    <>
      <section className="blog-section">
        <div className="typography" data-aos="fade-up">
          <h1 className="bg-secondary rounded-full px-4 py-2 inline">
            Latest Blogs
          </h1>
          <h2>Unlocking the Secrets of Effective Dispatching</h2>
          <p>
            ChatGPT Dive into our blog for expert insights, industry trends, and
            valuable tips on logistics and trucking. Enhance your knowledge with
            Alpha Cargo Solutions.
          </p>
        </div>

        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-info">
                <span className="username">{blog.username}</span>
                <span className="date">{blog.date}</span>
                <span className="comments">{blog.comments} comments</span>
              </div>
              <div className="blog-content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <Link to={`/blog/${blog.id}`} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
