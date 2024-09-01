import useAuthStore from "@/store/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();
  const { token, logout } = useAuthStore();

  useEffect(() => {
    const fetchDashboard = async () => {
      const response = await fetch("http://localhost:5000/api/auth/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setRole(data.role);
      } else {
        router.push("/login");
      }
    };

    fetchDashboard();
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">{message}</p>
        <p className="mb-4">Role: {role}</p>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="w-full bg-red-500 text-white p-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
