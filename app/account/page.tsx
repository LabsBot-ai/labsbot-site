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
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="pb-6 text-center text-3xl font-semibold text-indigo-200/65">
            My account
          </h1>
          <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
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

