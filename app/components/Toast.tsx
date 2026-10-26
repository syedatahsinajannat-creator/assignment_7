"use client";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type = "success", onClose }: ToastProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50 animate-bounce">
      <div
        className={`px-4 py-3 rounded-xl shadow-lg border text-sm font-medium flex items-center gap-3 ${
          type === "success"
            ? "bg-emerald-600 text-white border-emerald-700"
            : "bg-red-600 text-white border-red-700"
        }`}
      >
        <span>{message}</span>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white font-bold text-base"
        >
          ×
        </button>
      </div>
    </div>
  );
}