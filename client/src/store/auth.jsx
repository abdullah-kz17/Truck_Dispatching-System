import { createContext, useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", email: "" });
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [services, setServices] = useState([]);

  const storeTokenInLs = (storeToken) => {
    localStorage.setItem("token", storeToken);
    setToken(storeToken);
  };

  const updateUser = useCallback((newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  }, []);

  const authorizationToken = `Bearer ${token}`;

  const logOutUser = () => {
    setUser({ username: "", email: "" });
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5010/api/auth/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched user data:", data); // Debugging line
        setUser(data.userData || { username: "", email: "" }); // Ensure default values
      } else {
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5010/api/data/services");
      const data = await response.json();
      console.log("Fetched services data:", data); // Debugging line
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const isLoggedIn = !!token;

  useEffect(() => {
    userAuthentication();
    fetchServices();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        storeTokenInLs,
        logOutUser,
        isLoggedIn,
        authorizationToken,
        services,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
