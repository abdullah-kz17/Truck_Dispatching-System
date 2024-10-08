const adminMiddleware = (req, res, next) => {
  try {
    // Ensure req.user is populated by the authentication middleware
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if user has admin role
    const isAdmin = req.user.role === "Admin";
    if (!isAdmin) {
      return res.status(403).json({ message: "You are not authorized" });
    }

    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = adminMiddleware;
