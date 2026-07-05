import { ImageResponse } from "next/og";

export const alt = "Alok Sharma — Friend Who Codes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f1e8",
          color: "#1c1813",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6f6557",
            fontFamily: "monospace",
          }}
        >
          Alok Sharma — software engineer, India
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, lineHeight: 1.02, fontWeight: 600 }}>
            Your friend
          </div>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1.02,
              fontWeight: 600,
              fontStyle: "italic",
              color: "#c8441a",
            }}
          >
            who codes.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #e0d8c8",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontFamily: "monospace" }}>
            friendwhocodes.com
          </div>
          <div
            style={{
              display: "flex",
              width: 22,
              height: 22,
              borderRadius: 22,
              background: "#c8441a",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
