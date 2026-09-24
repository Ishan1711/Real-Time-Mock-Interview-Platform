import { useState, ChangeEvent, FormEvent } from "react";

import Input from "../components/Input";
import { loginUser } from "../services/authService";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = (): boolean => {
    let isValid = true;

    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", result);

      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
          Welcome Back
        </h1>

        <p className="mb-8 text-gray-600">
          Login to your MockInterview account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;