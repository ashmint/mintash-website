import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 18%, rgba(59,130,246,0.38), transparent 26%), radial-gradient(circle at 85% 18%, rgba(14,165,233,0.24), transparent 24%), linear-gradient(180deg, #03050d 0%, #050816 55%, #02040a 100%)",
          color: "#f8fbff",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-120px",
            top: "160px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(96,165,250,0.28)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "40px",
            width: "280px",
            height: "280px",
            borderRadius: "999px",
            background: "rgba(94,234,212,0.18)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "36px",
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)), rgba(5, 10, 26, 0.72)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            padding: "42px 48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Mintash Technologies
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(224, 242, 254, 0.82)",
                }}
              >
                Official Partner of Miphi
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(15, 23, 42, 0.6)",
                fontSize: 18,
                color: "rgba(224, 242, 254, 0.85)",
              }}
            >
              Affordable AI infrastructure
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "840px",
            }}
          >
            <div
              style={{
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Democratizing AI for Everyone
            </div>
            <div
              style={{
                fontSize: 29,
                lineHeight: 1.35,
                color: "rgba(226, 232, 240, 0.88)",
              }}
            >
              Affordable, scalable, enterprise-grade on-premise AI solutions for
              organizations that want control, performance, and cost efficiency.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              "AI server solutions",
              "On-premise AI deployment",
              "AI lab infrastructure",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(125,211,252,0.28)",
                  background: "rgba(10, 17, 37, 0.72)",
                  color: "rgba(240, 249, 255, 0.92)",
                  fontSize: 18,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
