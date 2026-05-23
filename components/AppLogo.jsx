"use client";

import Image from "next/image";

export default function AppLogo({ size = 44, showText = true, compact = false, subtitle }) {
  const imageSize = compact ? Math.round(size * 0.82) : size;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 10 : 14, minWidth: 0 }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: Math.max(14, Math.round(size * 0.3)),
          background: "rgba(212,175,55,0.1)",
          border: "1px solid #D4AF37",
          padding: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px var(--accent-glow-v), 0 10px 32px rgba(0,0,0,0.35)",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: Math.max(13, Math.round(size * 0.28)),
            background: "linear-gradient(160deg, rgba(24,24,31,0.98), rgba(10,10,15,0.96))",
            border: "1px solid rgba(212,175,55,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/logo.png"
            alt="Barunaha Entertainment logo"
            width={imageSize}
            height={imageSize}
            style={{ width: "auto", height: imageSize, maxWidth: "100%", objectFit: "contain" }}
            priority
          />
        </div>
      </div>
      {showText ? (
        <div style={{ minWidth: 0 }}>
          <div className="syne" style={{ fontSize: compact ? 15 : 18, fontWeight: 800, color: "var(--text)", letterSpacing: "0.08em", lineHeight: 1.05 }}>
            Barunaha Entertainment
          </div>
          <div style={{ fontSize: compact ? 10 : 11, color: "var(--text-2)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {subtitle || "HRMS & Payroll Portal"}
          </div>
        </div>
      ) : null}
    </div>
  );
}
