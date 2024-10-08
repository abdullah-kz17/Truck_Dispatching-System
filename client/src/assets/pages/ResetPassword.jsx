import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import resetPassword from "/images/reset-password.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ResetPassword.scss";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate()

  const { authorizationToken } = useAuth(); // Destructure the authorizationToken

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5010/api/auth/reset-password/${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset successful");
        navigate("/login")
      } else {
        toast.error("Password reset failed: " + data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="form-group">
            <div className="from-image">
              <img
                src={resetPassword}
                className="cover"
                alt="login image"
                height={200}
                width={270}
              />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter new password"
            />
          </div>
          <button type="submit" className="">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
