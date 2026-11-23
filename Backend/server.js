
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:4200"
}));

app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Gemini AI Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
