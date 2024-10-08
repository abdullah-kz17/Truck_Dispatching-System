import { useState } from "react";
import { useAuth } from "../../store/auth";
import { Link, useNavigate } from "react-router-dom";
import login from "/images/login.png";
import { toast } from "react-toastify";
import "./Login.scss";

const Login = () => {
  const { storeTokenInLs } = useAuth();
  const defaultForm = {
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
      const response = await fetch("http://localhost:5010/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Login Successful");
        storeTokenInLs(data.token);
        setUser(defaultForm);
        navigate("/");
      } else {
        toast.error("Login failed: " + data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-form-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="from-image">
                  <img
                    src={login}
                    className="cover"
                    alt="login image"
                    height={200}
                    width={270}
                  />
                </div>
                <h1 className="font-bold">Login Form</h1>
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
                Login
              </button>
              <div className="form-link">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
