import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import "./Shipments.scss";

const Shipments = () => {
  const { authorizationToken, user } = useAuth();
  const [shipments, setShipments] = useState([]);
  const [formData, setFormData] = useState({
    loadNumber: "",
    originAddress: "",
    destinationAddress: "",
    truckTypeRequired: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    description: "",
  });
  const [editingShipment, setEditingShipment] = useState(null);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch("http://localhost:5010/api/load/loads", {
          headers: {
            Authorization: authorizationToken,
          },
        });
        if (response.ok) {
          const data = await response.json();
          // Filter shipments to only show the current user's shipments
          const userShipments = data.filter(
            (shipment) => shipment.userId === user.id
          );
          setShipments(userShipments);
        } else {
          console.error("Error fetching shipments");
        }
      } catch (error) {
        console.error("Network error fetching shipments:", error);
      }
    };

    fetchShipments();
  }, [authorizationToken, user.id]);

  // ... (handleChange, handleSubmit, handleUpdate remain the same)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      origin: {
        address: formData.originAddress,
      },
      destination: {
        address: formData.destinationAddress,
      },
      loadDetails: {
        weight: formData.weight,
        dimensions: {
          length: formData.length,
          width: formData.width,
          height: formData.height,
          description: formData.description,
        },
      },
      userId: user.id,
    };

    try {
      const response = await fetch("http://localhost:5010/api/load/loads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newShipment = await response.json();
        setShipments((prevShipments) => [...prevShipments, newShipment]);
        setFormData({
          loadNumber: "",
          originAddress: "",
          destinationAddress: "",
          truckTypeRequired: "",
          weight: "",
          length: "",
          width: "",
          height: "",
          description: "",
        });
        alert("Shipment created successfully");
      } else {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        alert("Error creating shipment. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error creating shipment:", error);
      alert("Network error. Please check the console for details.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      origin: {
        address: formData.originAddress,
      },
      destination: {
        address: formData.destinationAddress,
      },
      loadDetails: {
        weight: formData.weight,
        dimensions: {
          length: formData.length,
          width: formData.width,
          height: formData.height,
          description: formData.description,
        },
      },
      userId: user.id,
    };

    try {
      const response = await fetch(
        `http://localhost:5010/api/load/loads/${editingShipment}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setShipments((prevShipments) =>
          prevShipments.map((shipment) =>
            shipment._id === editingShipment
              ? { ...shipment, ...payload }
              : shipment
          )
        );
        setEditingShipment(null);
        setFormData({
          loadNumber: "",
          originAddress: "",
          destinationAddress: "",
          truckTypeRequired: "",
          weight: "",
          length: "",
          width: "",
          height: "",
          description: "",
        });
        alert("Shipment updated successfully");
      } else {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        alert("Error updating shipment. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error updating shipment:", error);
      alert("Network error. Please check the console for details.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDelete = async (shipmentId) => {
    // Check if the shipment belongs to the current user before deleting
    const shipmentToDelete = shipments.find((s) => s._id === shipmentId);
    if (!shipmentToDelete || shipmentToDelete.userId !== user.id) {
      alert("You are not authorized to delete this shipment.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5010/api/load/loads/${shipmentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        setShipments(
          shipments.filter((shipment) => shipment._id !== shipmentId)
        );
        alert("Shipment deleted successfully");
      } else {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        alert("Error deleting shipment. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error deleting shipment:", error);
      alert("Network error. Please check the console for details.");
    }
  };

  const handleEdit = (shipment) => {
    // Check if the shipment belongs to the current user before editing
    if (shipment.userId !== user.id) {
      alert("You are not authorized to edit this shipment.");
      return;
    }

    setEditingShipment(shipment._id);
    setFormData({
      loadNumber: shipment.loadNumber,
      originAddress: shipment.origin.address,
      destinationAddress: shipment.destination.address,
      truckTypeRequired: shipment.truckTypeRequired,
      weight: shipment.loadDetails.weight,
      length: shipment.loadDetails.dimensions.length,
      width: shipment.loadDetails.dimensions.width,
      height: shipment.loadDetails.dimensions.height,
      description: shipment.loadDetails.dimensions.description,
    });
  };

  return (
    <div className="overflow-x-hidden p-6 bg-gray-100 min-h-screen">
      {/* ... (form code remains the same) */}
      <form
        onSubmit={editingShipment ? handleUpdate : handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">
          {editingShipment ? "Edit Shipment" : "Create Shipment"}
        </h2>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Load Number</label>
          <input
            type="text"
            name="loadNumber"
            value={formData.loadNumber}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Origin Address</label>
          <input
            type="text"
            name="originAddress"
            value={formData.originAddress}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Destination Address</label>
          <input
            type="text"
            name="destinationAddress"
            value={formData.destinationAddress}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Truck Type Required</label>
          <select
            name="truckTypeRequired"
            value={formData.truckTypeRequired}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Truck Type</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Dry Van">Dry Van</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Dimensions (cm)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="length"
              placeholder="Length"
              value={formData.length}
              onChange={handleChange}
              className="p-2 border rounded w-1/3"
              required
            />
            <input
              type="number"
              name="width"
              placeholder="Width"
              value={formData.width}
              onChange={handleChange}
              className="p-2 border rounded w-1/3"
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Height"
              value={formData.height}
              onChange={handleChange}
              className="p-2 border rounded w-1/3"
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Load Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg"
        >
          {editingShipment ? "Update Shipment" : "Create Shipment"}
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4 mt-6">Your Shipments</h2>
      <table className="bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-2 border-b">Load Number</th>
            <th className="p-2 border-b">Origin</th>
            <th className="p-2 border-b">Destination</th>
            <th className="p-2 border-b">Truck Type</th>
            <th className="p-2 border-b">Weight (kg)</th>
            <th className="p-2 border-b">Dimensions (cm)</th>
            <th className="p-2 border-b">Description</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment._id}>
              <td className="p-2 border-b">{shipment.loadNumber}</td>
              <td className="p-2 border-b">{shipment.origin.address}</td>
              <td className="p-2 border-b">{shipment.destination.address}</td>
              <td className="p-2 border-b">{shipment.truckTypeRequired}</td>
              <td className="p-2 border-b">{shipment.loadDetails.weight}</td>
              <td className="p-2 border-b">
                {shipment.loadDetails.dimensions.length} x{" "}
                {shipment.loadDetails.dimensions.width} x{" "}
                {shipment.loadDetails.dimensions.height}
              </td>
              <td className="p-2 border-b">
                {shipment.loadDetails.dimensions.description}
              </td>
              <td className="p-2 border-b space-x-2 flex">
                <button
                  onClick={() => handleEdit(shipment)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(shipment._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipments;
