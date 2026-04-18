import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hashtricks Technologies — Custom Software & AI Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#161E54",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 60% 70% at 90% 100%, rgba(241,109,52,0.35), transparent 60%)",
          }}
        />

        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#F16D34",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Hashtricks Technologies
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#F5F0E8",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Custom Software &
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#F16D34",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            AI-Powered Systems
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(245,240,232,0.6)",
              marginTop: 8,
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            We reduce manual work and help growing businesses operate smarter.
          </div>
        </div>

        {/* Bottom: location pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(241,109,52,0.15)",
              border: "1px solid rgba(241,109,52,0.3)",
              borderRadius: 100,
              padding: "8px 18px",
            }}
          >
            <span style={{ fontSize: 14, color: "#FF986A" }}>📍</span>
            <span style={{ fontSize: 14, color: "#FF986A", fontWeight: 600 }}>
              Coimbatore, India
            </span>
          </div>
          <span style={{ fontSize: 14, color: "rgba(245,240,232,0.35)" }}>
            hashtricks.tech
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
