"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AccountPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUserEmail(session?.user?.email ?? null);
    };

    void loadSession();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error.message);
      return;
    }
    router.push("/");
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Sidebar */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-white/60">Settings</div>
          <div className="space-y-1">
            <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white">
              Account
            </div>
            <div className="cursor-pointer rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/5">
              Billing
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6 md:col-span-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-white">
              Account settings
            </h1>
            <p className="text-sm text-white/50">
              Manage your profile and account access.
            </p>
          </div>

          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-medium text-white">Profile</h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="text-sm text-white/60">Email</p>
                <p className="text-sm text-white">{userEmail}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">Status</p>
                <p className="text-sm text-white">Active</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-medium text-white">Actions</h2>

            <button
              type="button"
              onClick={handleSignOut}
              className="cursor-pointer w-full rounded-lg px-4 py-2.5 text-sm font-medium border border-white/20 text-white/90 bg-transparent hover:bg-white/10 transition"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

