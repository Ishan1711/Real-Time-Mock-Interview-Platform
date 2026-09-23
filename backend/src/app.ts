import express from "express";
import cors from "cors";

import { errorHandler } from "./middleware/error.middleware.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

export default app;