const router = require("express").Router();
const authRoutes = require("./books");

// Authentication routes
router.use("/auth", authRoutes);

module.exports = router;
