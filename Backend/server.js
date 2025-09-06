import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Get all users
app.get("/api/users", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    res.status(500).send("Server error");
  }
});

// ✅ Create a new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await client.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error creating user:", err.message);
    res.status(500).send("Server error");
  }
});

// ✅ Update a user
app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await client.query(
      "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
      [name, email, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error updating user:", err.message);
    res.status(500).send("Server error");
  }
});

// ✅ Delete a user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.query("DELETE FROM users WHERE id=$1", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error("❌ Error deleting user:", err.message);
    res.status(500).send("Server error");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
