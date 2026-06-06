export default function StatCard({ icon, label, value, accent, sub, onClick, style }) {
  const isClickable = !!onClick;
  return (
    <div
      className={`stat-card ${isClickable ? 'clickable-card' : ''}`}
      onClick={onClick}
      style={{
        "--accent-local": accent || "var(--accent)",
        borderBottom: `2px solid ${accent || "var(--accent)"}`,
        paddingBottom: 22,
        cursor: isClickable ? "pointer" : "default",
        ...style
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          marginBottom: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, color-mix(in srgb, ${accent || "var(--accent)"} 12%, var(--surface3)), color-mix(in srgb, ${accent || "var(--accent)"} 4%, var(--surface2)))`,
          border: `1px solid color-mix(in srgb, ${accent || "var(--accent)"} 26%, var(--border))`,
          boxShadow: `0 0 18px color-mix(in srgb, ${accent || "var(--accent)"} 12%, transparent)`,
          fontSize: 24,
        }}
      >
        {icon}
      </div>
      <div
        className="syne"
        style={{
          color: accent || "var(--accent)",
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-2)", marginTop: 8 }}>{label}</div>
      {sub && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}
