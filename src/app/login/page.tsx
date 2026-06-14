"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const supabase = createSupabaseBrowserClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Bypass mode if Supabase is not configured
    if (!supabase) {
      if (email === "admin@tattvpeeth.org" && password === "adminpassword") {
        setMessage("Demo authentication successful. Redirecting to admin dashboard...");
        setTimeout(() => {
          router.push("/admin");
        }, 1200);
      } else {
        setMessage("Error: Supabase is not configured. For demo access, use email 'admin@tattvpeeth.org' and password 'adminpassword'.");
        setLoading(false);
      }
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(`Auth error: ${error.message}`);
      } else {
        setMessage("Sign in successful. Redirecting...");
        setTimeout(() => {
          router.push("/admin");
        }, 1000);
      }
    } catch (err: any) {
      setMessage(`Unexpected error: ${err?.message || err}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (password !== confirmPassword) {
      setMessage("Error: Passwords do not match.");
      setLoading(false);
      return;
    }

    // Bypass mode (frontend demonstration only as requested)
    setTimeout(() => {
      setMessage("Account registration successful (Demo Mode). Redirecting to admin dashboard...");
      setTimeout(() => {
        router.push("/admin");
      }, 1200);
    }, 1000);
  }

  function handleDemoBypass() {
    setEmail("admin@tattvpeeth.org");
    setPassword("adminpassword");
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "0.5px solid var(--c-div)",
    background: "var(--c-cream)",
    borderRadius: "2px",
    fontFamily: "inherit",
    fontSize: "14px",
    color: "var(--c-deep)",
    outline: "none",
  };

  return (
    <section className="flex min-h-[calc(100vh-136px)] items-center justify-center py-16 px-4">
      <div
        className="w-full max-w-[400px] rounded-sm border p-8"
        style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
      >
        {/* Header */}
        <p
          className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Secure Access
        </p>
        <h1
          className="mb-6 text-center font-serif text-[28px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>

        {/* Tab Switcher */}
        <div className="flex border-b mb-6" style={{ borderColor: "var(--c-div)" }}>
          <button
            type="button"
            className={`flex-1 pb-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors border-b-2 font-semibold ${
              !isSignUp
                ? "border-[var(--c-ochre)] text-[var(--c-deep)]"
                : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-deep)]"
            }`}
            onClick={() => {
              setIsSignUp(false);
              setMessage(null);
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`flex-1 pb-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors border-b-2 font-semibold ${
              isSignUp
                ? "border-[var(--c-ochre)] text-[var(--c-deep)]"
                : "border-transparent text-[var(--c-muted)] hover:text-[var(--c-deep)]"
            }`}
            onClick={() => {
              setIsSignUp(true);
              setMessage(null);
            }}
          >
            Create Account
          </button>
        </div>

        {isSignUp ? (
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Acharya Sharma"
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g. admin@tattvpeeth.org"
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-sm py-3 text-[12px] font-medium uppercase tracking-[0.08em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g. admin@tattvpeeth.org"
                style={inputStyle}
              />
            </div>

            <div>
              <label
                className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-muted)" }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-sm py-3 text-[12px] font-medium uppercase tracking-[0.08em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
          </form>
        )}

        {message && (
          <p
            className="mt-4 text-center text-[12.5px] font-light leading-[1.6]"
            style={{ color: message.startsWith("Error") ? "var(--c-at)" : "var(--c-ochre)" }}
          >
            {message}
          </p>
        )}

        {/* Demo info note */}
        {!isSignUp && (
          <div
            className="mt-6 border-t pt-5 text-center text-[12px] font-light leading-[1.6]"
            style={{ color: "var(--c-muted)", borderColor: "var(--c-div)" }}
          >
            <p>
              Supabase Auth is configured on the backend.
              {!supabase && (
                <span className="block mt-2 font-medium" style={{ color: "var(--c-ochre)" }}>
                  Supabase credentials not detected in local environment. Click below to use demo bypass credentials.
                </span>
              )}
            </p>
            {!supabase && (
              <button
                onClick={handleDemoBypass}
                className="mt-3 text-[11px] font-medium uppercase tracking-[0.08em] underline transition-colors hover:text-[var(--c-ochre)]"
                style={{ color: "var(--c-deep)" }}
              >
                Fill Demo Credentials
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
