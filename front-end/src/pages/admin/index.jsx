'use client';
// pages/admin.js

import withAuth from "@/components/HOC/withAuth";

function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>
        <p className="text-center">This is a protected admin page.</p>
      </div>
    </div>
  );
}

// Wrap the component with withAuth HOC, requiring 'admin' role
export default withAuth(AdminPage, "admin");
