import create from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      role: null,
      login: (userData) => set(userData),
      logout: () => set({ user: null, token: null, role: null }),
    }),
    {
      name: "auth-storage", // unique name for storage
    }
  )
);

export default useAuthStore;
