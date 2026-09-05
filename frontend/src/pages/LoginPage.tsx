import Input from "../components/Input";

function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-3xl font-bold">Welcome Back</h1>
        <p className="mb-8 text-gray-600">
          Login to your MockInterview account
        </p>

        <form className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:opacity-80"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;