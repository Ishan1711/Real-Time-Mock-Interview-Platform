import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware.js";
import { sendSuccess } from "./utils/response.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  return sendSuccess(res, "Server is healthy");
});

app.use(errorHandler);

export default app;