import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./EditUser.scss"; // Import custom styles

const EditUser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    role:[],
  });
  const { authorizationToken } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:5010/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5010/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        toast.success("User Updated Successfully");
        navigate("/admin/users"); 
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [id]);

  return (
    <div className="user-edit-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="user-edit-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
