// components/withAuth.js
import useAuthStore from "@/store/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent, requiredRole = null) => {
  return (props) => {
    const router = useRouter();
    const { token, role } = useAuthStore();

    useEffect(() => {
      if (!token) {
        router.push("/login");
      } else if (requiredRole && role !== requiredRole) {
        router.push("/unauthorized");
      }
    }, [token, role, router]);

    if (!token) {
      return null; // Or a loader/spinner
    }

    if (requiredRole && role !== requiredRole) {
      return null; // Or a loader/spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
