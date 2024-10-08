import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import signup from "/images/signup.png";
import { toast } from "react-toastify";
import "./Signup.scss";

const SignUp = () => {
  const { storeTokenInLs } = useAuth();
  const defaultForm = {
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5010/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Signup Successful");
        storeTokenInLs(data.token);
        setUser(defaultForm);
        navigate("/");
      } else {
        toast.error("Signup failed: " + data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="from-image">
            <img
              src={signup}
              className="cover"
              alt="signup image"
              height={200}
              width={270}
            />
          </div>
          <h1 className="font-bold text-xl mb-3">Signup</h1>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={user.username}
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              required
            />
          </div>
          
          <button type="submit" className="">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
