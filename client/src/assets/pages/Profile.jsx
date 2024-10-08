import { useState, useCallback } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, authorizationToken, updateUser } = useAuth();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!file || !user?._id) {
        toast.error("Please select a file and ensure you're logged in.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await fetch("http://localhost:5010/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) throw new Error("Failed to upload file");

        const { imageUrl } = await uploadResponse.json();

        const updateResponse = await fetch(
          `http://localhost:5010/api/admin/users/profile-picture/${user._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
            body: JSON.stringify({ profilePicture: imageUrl }),
          }
        );

        if (!updateResponse.ok)
          throw new Error("Failed to update profile picture");

        const updatedUser = await updateResponse.json();

        // Update global state with the new profile picture
        updateUser({ ...user, profilePicture: imageUrl });

        setFile(null); // Reset file input
        toast.success("Profile picture updated successfully!");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Failed to update profile picture");
      }
    },
    [file, user, authorizationToken, updateUser]
  );

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <img
        src={
          user.profilePicture
            ? `http://localhost:5010${user.profilePicture}`
            : "https://via.placeholder.com/150"
        }
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
          disabled={!file}
        >
          Update Profile Picture
        </button>
      </form>
    </div>
  );
};

export default Profile;
