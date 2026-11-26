export default function StatCard({ icon, label, value, accent, sub, onClick, style }) {
  const isClickable = !!onClick;
  return (
    <div
      className={`stat-card ${isClickable ? 'clickable-card' : ''}`}
      onClick={onClick}
      style={{
        "--accent-local": accent || "var(--accent)",
        borderBottom: `2px solid ${accent || "var(--accent)"}`,
        paddingBottom: 12,
        cursor: isClickable ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minWidth: 0,
        ...style
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px 8px", minWidth: 0 }}>
        <div
          style={{
            width: 28,
            height: 28,
            flexShrink: 0,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--accent)"} 12%, var(--surface3)), color-mix(in srgb, ${accent || "var(--accent)"} 4%, var(--surface2)))`,
            border: `1px solid color-mix(in srgb, ${accent || "var(--accent)"} 26%, var(--border))`,
            boxShadow: `0 0 18px color-mix(in srgb, ${accent || "var(--accent)"} 12%, transparent)`,
            fontSize: 15,
          }}
        >
          {icon}
        </div>
        <div
          className="syne"
          style={{
            color: accent || "var(--accent)",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </div>
      </div>
      <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.3 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.3 }}>{sub}</div>}
    </div>
  );
}
