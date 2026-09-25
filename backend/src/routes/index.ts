import { Router } from "express";

import { sendSuccess } from "../utils/response.js";
import db from "../config/db.js";

import {
  register,
  login,
  getMe,
} from "../controllers/auth.controller.js";

import { authenticateToken } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/health", (req, res) => {
  return sendSuccess(res, "Server is healthy");
});

router.get("/db-test", async (req, res) => {
  try {
    const plan = db.sql.public.user
      .select("id")
      .limit(1)
      .build();

    const result = await db.runtime().query(plan);

    return sendSuccess(
      res,
      "Database connection is working",
      result
    );
  } catch (error) {
    console.error("Database connection failed:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

router.post("/auth/register", register);

router.post("/auth/login", login);

// Current authenticated user
router.get(
  "/auth/me",
  authenticateToken,
  getMe
);

// Protected test endpoint
router.get(
  "/auth/protected",
  authenticateToken,
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "Protected route accessed successfully",
      user: res.locals.user,
    });
  }
);

export default router;