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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          <div className="text-sm text-white/50">Settings</div>
          <div className="space-y-1">
            <div className="px-3 py-2 rounded-lg bg-white/10 text-white">
              Account
            </div>
            <div className="px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 cursor-pointer">
              Billing
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-3xl font-semibold text-white">My account</h1>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <p className="text-xs text-white/50">Email</p>
              <p className="text-sm text-white">{userEmail}</p>
            </div>

            <div>
              <p className="text-xs text-white/50">Status</p>
              <p className="text-sm text-white">Active</p>
            </div>

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

