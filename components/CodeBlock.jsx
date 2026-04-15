import { useRef, useState } from "react";

export default function CodeBlock({ title, children }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!codeRef.current) return;

    const text = codeRef.current.innerText;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const baseButtonStyle = {
    fontSize: "12px",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: copied ? "#eef2ff" : "#ffffff",
    color: copied ? "#3730a3" : "#374151",
    cursor: "pointer",
    transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
    outline: "none",
  };

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        margin: "16px 0",
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px",
          background: "#f8fafc",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          {title}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          style={baseButtonStyle}
          onMouseOver={(e) => {
            if (copied) {
              e.currentTarget.style.background = "#e0e7ff";
              e.currentTarget.style.borderColor = "#c7d2fe";
              e.currentTarget.style.color = "#312e81";
            } else {
              e.currentTarget.style.background = "#f9fafb";
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.color = "#111827";
            }
          }}
          onMouseOut={(e) => {
            if (copied) {
              e.currentTarget.style.background = "#eef2ff";
              e.currentTarget.style.borderColor = "#d1d5db";
              e.currentTarget.style.color = "#3730a3";
            } else {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.borderColor = "#d1d5db";
              e.currentTarget.style.color = "#374151";
            }
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div
        ref={codeRef}
        style={{
          margin: 0,
          padding: 0,
          background: "transparent",
        }}
      >
        {children}
      </div>
    </div>
  );
}
