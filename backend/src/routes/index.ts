import { Router } from "express";
import { sendSuccess } from "../utils/response.js";

const router = Router();

router.get("/health", (req, res) => {
  return sendSuccess(res, "Server is healthy");
});

export default router;