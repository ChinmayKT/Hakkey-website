"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShimmerSpan from "./ShimmerSpan";
import { postEarlyAccess } from "../utils/api";

/* ── Spinner ── */
function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

/* ── Ordinal helper ── */
function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/* ── Main Component ── */
const POPUP_DELAY = 10_000; // 10 seconds
const MAX_AUTO_OPENS = 3;
const DONE_KEY = "hakkey_early_access_done";

function isDone() {
  try { return localStorage.getItem(DONE_KEY) === "true"; } catch { return false; }
}

export default function EarlyAccessPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState<"user" | "chef">("user");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isInfoMsg, setIsInfoMsg] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [shake, setShake] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoCountRef = useRef(0);

  /* ── Timer logic ── */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isDone()) return;
    if (autoCountRef.current >= MAX_AUTO_OPENS) return;
    timerRef.current = setTimeout(() => {
      if (isDone()) return;
      setOpen((prev) => {
        if (prev) return prev;
        autoCountRef.current += 1;
        return true;
      });
    }, POPUP_DELAY);
  }, []);

  /* ── Start timer on mount ── */
  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [startTimer]);

  /* ── Public trigger (called from CTA clicks) ── */
  const trigger = useCallback(() => {
    if (isDone()) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  /* Expose trigger on window for CTA buttons */
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__hakkeyEarlyAccess = trigger;
    return () => {
      delete (window as unknown as Record<string, unknown>).__hakkeyEarlyAccess;
    };
  }, [trigger]);

  /* ── Focus trap on open ── */
  useEffect(() => {
    if (open && nameRef.current) {
      const t = setTimeout(() => nameRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  /* ── ESC to close ── */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
    setName("");
    setPhone("");
    setUserType("user");
    setError("");
    setIsInfoMsg(false);
    setNameError("");
    setPhoneError("");
    setShake(false);
    if (!isDone()) startTimer();
  }

  /* ── Shake + vibrate helper ── */
  function fireShake() {
    setShake(true);
    setTimeout(() => setShake(false), 400);
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(200);
  }

  /* ── Validation + Submit ── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsInfoMsg(false);
    setNameError("");
    setPhoneError("");

    const trimmedName = name.trim();
    const trimmedPhone = phone.replace(/\s/g, "");

    let hasError = false;
    if (!trimmedName) { setNameError("Please enter your name"); hasError = true; }
    if (!trimmedPhone) { setPhoneError("Phone number is required"); hasError = true; }
    else if (!/^[6-9]\d{9}$/.test(trimmedPhone)) { setPhoneError("Enter a valid 10-digit mobile number"); hasError = true; }
    if (hasError) { fireShake(); return; }

    setLoading(true);
    try {
      const res = await postEarlyAccess({ name: trimmedName, phone: trimmedPhone, type: userType });
      try { localStorage.setItem(DONE_KEY, "true"); } catch { /* private browsing */ }
      if (res.position) setPosition(res.position);
      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      const isDuplicate = msg.includes("already on the early access list");
      setIsInfoMsg(isDuplicate);
      setError(msg);
      if (!isDuplicate) fireShake();
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="early-access-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          className="fixed inset-0 z-[999] flex items-center justify-center px-5"
          style={{ backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", background: "rgba(0,0,0,0.55)" }}
        >
          {/* ── Modal Card ── */}
          <motion.div
            key="early-access-modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)] px-7 sm:px-10 py-10 sm:py-12"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {success ? (
              /* ── Success State ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center py-4"
              >
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  You&apos;re in!
                </h3>
                {position && userType === "chef" ? (
                  <>
                    <p className="mt-3 text-lg sm:text-xl text-orange-300 font-bold">
                      You&apos;re the {ordinal(position)} home chef in our early access list.
                    </p>
                    <p className="mt-3 text-white/50 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                      We&apos;ll notify you at launch 🚀
                    </p>
                    <p className="mt-2 text-white/35 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                      Please respond to any calls or messages from the Hakkey team.
                    </p>
                  </>
                ) : (
                  <>
                    {position && (
                      <p className="mt-3 text-lg sm:text-xl text-orange-300 font-bold">
                        You&apos;re the {ordinal(position)} user to get early access!
                      </p>
                    )}
                    <p className="mt-3 text-white/50 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                      We&apos;ll notify you as soon as we launch 🚀<br />
                      You&apos;re part of our exclusive early community.
                    </p>
                  </>
                )}
                <button
                  onClick={close}
                  className="mt-8 text-sm text-white/30 hover:text-white/50 transition-colors underline underline-offset-4"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              /* ── Form State ── */
              <>
                {/* Spots badge */}
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/15 text-orange-300/90 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Only limited spots left
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-center text-2xl sm:text-3xl font-black text-white leading-[1.1]">
                  <span className="mr-2">🎉</span>
                  You&apos;re Early!
                  <br />
                  <ShimmerSpan className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-400">
                    Limited Access Open
                  </ShimmerSpan>
                </h3>

                {/* Subtitle */}
                <p className="mt-4 text-center text-white/40 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  Only <span className="text-white/65 font-semibold">first 100 users</span> &amp;{" "}
                  <span className="text-white/65 font-semibold">100 home chefs</span> will get exclusive launch benefits.
                </p>

                {/* Type Selection */}
                <div className="mt-6" role="radiogroup" aria-label="How would you like to join Hakkey?">
                  <p className="text-center text-[#F5F5F5]/90 text-base sm:text-lg font-semibold mb-4">
                    How would you like to be part of Hakkey?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      { value: "user" as const, emoji: "🍽️", label: "I will enjoy home-cooked meals", desc: "Discover fresh food made in nearby kitchens" },
                      { value: "chef" as const, emoji: "👩‍🍳", label: "I will become a home chef", desc: "Start my kitchen business with Hakkey" },
                    ]).map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={userType === opt.value}
                        onClick={() => setUserType(opt.value)}
                        className={`relative flex flex-col items-center justify-center gap-1.5 rounded-xl border px-3 py-4 min-h-[120px] transition-all duration-200 cursor-pointer text-center ${
                          userType === opt.value
                            ? "border-orange-400/60 bg-orange-500/10 shadow-[0_0_20px_rgba(255,107,0,0.1)] scale-[1.02]"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] scale-100"
                        }`}
                      >
                        <span className="text-2xl leading-none">{opt.emoji}</span>
                        <span className={`text-xs sm:text-sm font-bold leading-snug ${userType === opt.value ? "text-orange-300" : "text-white/70"}`}>
                          {opt.label}
                        </span>
                        <span className="text-[10px] sm:text-[11px] leading-tight text-white/35">
                          {opt.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setNameError(""); }}
                      className={`w-full rounded-xl border bg-white/5 px-5 py-3.5 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/20 transition-all ${nameError ? "border-red-400/60" : "border-white/10"}`}
                    />
                    {nameError && (
                      <motion.p initial={{ opacity: 0, y: -2 }} animate={{ opacity: 1, y: 0 }} className="text-red-400/90 text-[11px] mt-1.5 ml-1">
                        {nameError}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Phone Number (10 digits)"
                      value={phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setPhone(digits);
                        if (digits.length >= 1 && !/^[6-9]/.test(digits)) {
                          setPhoneError("Enter a valid 10-digit mobile number");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      className={`w-full rounded-xl border bg-white/5 px-5 py-3.5 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/20 transition-all ${phoneError ? "border-red-400/60" : "border-white/10"}`}
                    />
                    {phoneError && (
                      <motion.p initial={{ opacity: 0, y: -2 }} animate={{ opacity: 1, y: 0 }} className="text-red-400/90 text-[11px] mt-1.5 ml-1">
                        {phoneError}
                      </motion.p>
                    )}
                  </div>

                  {/* Global error (API errors) */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs text-center ${isInfoMsg ? "text-emerald-400" : "text-red-400/90"}`}
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.03, y: -1 }}
                    whileTap={loading ? {} : { scale: 0.97 }}
                    animate={shake ? { x: [0, -30, 30, -22, 22, -12, 12, 0] } : { x: 0 }}
                    transition={shake ? { duration: 0.6, ease: "easeInOut" } : {}}
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-sm sm:text-base rounded-xl px-6 py-4 shadow-[0_8px_32px_rgba(255,107,0,0.25)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? <Spinner /> : (
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={userType}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                        >
                          {userType === "chef" ? "Start My Chef Journey" : "Get Early Access"}
                        </motion.span>
                      </AnimatePresence>
                    )}
                  </motion.button>
                </form>

                {/* Footer */}
                <p className="mt-5 text-center text-white/25 text-[11px] tracking-wide">
                  🔒 No spam. Only important updates.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
