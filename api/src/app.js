import express from "express";
import mongoose from "mongoose";

import eventRoutes from "./modules/event/eventRoutes";
import postRoutes from "./modules/post/postRoutes";

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import loginRoutes from "./modules/login/loginRoutes";
import authenticateToken from "./modules/middleware/authMiddleware";
import authRoute from "./modules/middleware/authRoute";

dotenv.config();

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27019/api-generics";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const router = express.Router();

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow sending cookies
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/auth", loginRoutes);
router.use(authenticateToken);
app.use(router);

app.use("/post", authRoute, postRoutes);
app.use("/event", authRoute, eventRoutes);

app.get("/version", (req, res) => {
  res.status(200).json({
    version: "1.0.0",
    description: "CinePlus API - Initial version",
    lastUpdated: "2024-05-07",
  });
});

const PORT = process.env.PORT || 3526;

cron.schedule("*/10 * * * *", () => {
  // cordenada a serem monitoradas
  const coordinates = [
    [102.0, 17.0],
    [103.0, 18.0],
  ];

  fetchAndSaveImagesForCoordinates(coordinates);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
