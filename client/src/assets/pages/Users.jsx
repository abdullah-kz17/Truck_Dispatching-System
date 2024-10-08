import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5010/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log(data);

      // Ensure that data is an array
      if (Array.isArray(data)) {
        setUsers(data);
      } else if (data.users && Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        throw new Error("Data is not in the expected format");
      }
    } catch (error) {
      console.log(error);
      setUsers([]); // Set to empty array on error
    }
  };

  const deleteUserById = async (id) => {
    try {
      await fetch(`http://localhost:5010/api/admin/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="users-container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Users Page</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <Link
                      to={`/admin/users/update/${user._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600"
                    >
                      <i className="bx bx-pencil text-xl"></i>
                    </Link>
                    <button
                      onClick={() => deleteUserById(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded transition hover:bg-red-600"
                    >
                      <i className="bx bx-trash text-xl"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
