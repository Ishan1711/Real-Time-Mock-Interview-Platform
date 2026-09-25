import type { Request, Response } from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../services/auth.service.js";

import { generateToken } from "../utils/jwt.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const user = await registerUser({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: user,
    });
  } catch (error) {
    console.error("Registration failed:", error);

    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Registration failed",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await loginUser({
      email,
      password,
    });

    const token = generateToken(user.id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.error("Login failed:", error);

    return res.status(401).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Login failed",
    });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await getCurrentUser(userId);

    return res.status(200).json({
      success: true,
      message: "Current user fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error("Fetching current user failed:", error);

    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch current user",
    });
  }
};