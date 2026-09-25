import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

function DashboardPage() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const result = await getCurrentUser();
        setUser(result.data);
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-gray-600">
              {loading
                ? "Loading your profile..."
                : `Welcome, ${user?.name || "User"}!`}
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Start New Interview
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Interviews</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">In Progress</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">N/A</p>
          </div>
        </div>

        {/* Recent Interviews */}
        <section className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Interviews
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your latest mock interview sessions will appear here.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              No interviews yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Start your first mock interview to see your interview history
              here.
            </p>

            <button
              type="button"
              className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Start Your First Interview
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;