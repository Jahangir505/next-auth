// components/Navbar.js
import Link from "next/link";
import { useRouter } from "next/router";
import useAuthStore from "../store/auth";

export default function Navbar() {
  const { user, role, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div>
        <Link href="/">
          <p className="font-bold text-xl">MyApp</p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link href="/dashboard">
              <p>Dashboard</p>
            </Link>
            {role === "admin" && (
              <Link href="/admin">
                <p>Admin</p>
              </Link>
            )}
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <p>Login</p>
            </Link>
            <Link href="/register">
              <p>Register</p>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
