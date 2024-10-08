import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import "./Messages.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authorizationToken, user } = useAuth();

  useEffect(() => {
    const getAllMessages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:5010/api/admin/messages",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (Array.isArray(data)) {
          setMessages(data);
        } else if (data.messages && Array.isArray(data.messages)) {
          setMessages(data.messages);
        } else {
          throw new Error("Messages are not in the expected format");
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        setError("Failed to load messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getAllMessages();
  }, [authorizationToken, user]); // Added user to dependency array

  const handleDeleteMessage = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5010/api/form/delete/${id}`, // Correct URL format with message ID
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Remove the deleted message from the state
      setMessages(messages.filter((message) => message._id !== id));
    } catch (error) {
      console.log("Failed to delete message:", error);
      setError("Failed to delete message. Please try again later.");
    }
  };

  return (
    <div className="messages-container px-2">
      <h1 className="text-3xl font-bold mb-4 text-center">Messages Page</h1>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="user-info mb-6 p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">{user.role}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
      {messages.length > 0
        ? messages.map((message) => (
            <div
              key={message._id}
              className="message-card p-4 mb-4 bg-white rounded shadow-md"
            >
              <div className="sender-info mb-2">
                <p>
                  <strong>From:</strong> {message.username} ({message.email})
                </p>
              </div>
              <h3 className="text-lg font-semibold">
                {message.subject || "No Subject"}
              </h3>
              <p className="mt-2">{message.message}</p>
              <button
                onClick={() => handleDeleteMessage(message._id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        : !loading && <p className="text-gray-500">No messages available</p>}
    </div>
  );
};

export default Messages;
