"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"profile" | "billing">("profile");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUserEmail(session?.user?.email ?? null);
      setDisplayName(
        session?.user?.user_metadata?.full_name ??
          session?.user?.user_metadata?.name ??
          null
      );
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
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        {/* Sidebar */}
        <aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
          <div className="text-sm font-medium text-white/60">Settings</div>
          <div className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-2">
            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`block w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm ${
                activeTab === "profile"
                  ? "border border-white/10 bg-white/10 font-medium text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              Profile
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("billing")}
              className={`block w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm ${
                activeTab === "billing"
                  ? "border border-white/10 bg-white/10 font-medium text-white"
                  : "text-white/70 hover:bg-white/5"
              }`}
            >
              Billing
            </button>
            <div className="rounded-lg px-3 py-2 text-sm text-white/50">
              Actions
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <h1 className="text-3xl font-semibold text-white">
              Account settings
            </h1>
            <p className="text-sm text-white/50">
              Manage your profile and account access.
            </p>
          </div>

          {activeTab === "profile" && (
            <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-medium text-white">Profile</h2>

              <div className="space-y-3">
                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Display name</p>
                  <p className="text-sm text-white">{displayName ?? "Not set"}</p>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-sm text-white">{userEmail}</p>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Sign-in method</p>
                  <p className="text-sm text-white">Google</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Account status</p>
                  <p className="text-sm text-white">Active</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-medium text-white">Billing</h2>
              <div className="space-y-3">
                <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Current plan</p>
                  <p className="text-sm text-white">Free</p>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-white/60">Billing status</p>
                  <p className="text-sm text-white">Not configured yet</p>
                </div>
              </div>
              <button
                type="button"
                className="cursor-pointer inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium bg-linear-to-t from-indigo-500 via-violet-500 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,.16)] hover:bg-[length:100%_150%] transition-all"
              >
                Upgrade plan
              </button>
            </div>
          )}

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
