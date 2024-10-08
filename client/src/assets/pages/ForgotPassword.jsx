import { useState } from "react";
import forgotPassword from "/images/forgot-password.png";
import { toast } from "react-toastify";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5010/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset email sent successfully");
      } else {
        toast.error("Failed to send password reset email: " + data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <h1 className="font-bold text-base">Forgot Password</h1>

            <div className="form-image">
              <img
                src={forgotPassword}
                className="cover"
                alt="Forgot password illustration"
                height={200}
                width={270}
              />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
