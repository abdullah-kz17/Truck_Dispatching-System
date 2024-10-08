const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/error-middleware");
const authRoute = require("./router/auth-router");
const truckRoute = require("./router/truck-route");
const userRoute = require("./router/user-router");
const loadRoute = require("./router/load-router");
const servicesRoute = require("./router/services-router");
const dispatchRoute = require("./router/dispatch-router");
const contactRoute = require("./router/contact-router");

const app = express();

// Handling Cors Policy error
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoint to upload a picture
app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ message: "No file uploaded" });
  }
  res.send({ imageUrl: `/uploads/${file.filename}` });
});

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route Middleware
app.use("/api/auth", authRoute);
app.use("/api/truck", truckRoute);
app.use("/api/admin", userRoute);
app.use("/api/load", loadRoute);
app.use("/api/dispatch", dispatchRoute);
app.use("/api/data", servicesRoute);
app.use("/api/form", contactRoute);

// Error Middleware
app.use(errorMiddleware);

// Connect to MongoDB and start the server
const PORT = 5010;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
