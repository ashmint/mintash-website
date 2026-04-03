import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, rgba(12,17,36,1) 0%, rgba(17,31,67,1) 45%, rgba(35,99,235,1) 100%)",
          color: "#eff6ff",
          fontSize: 34,
          fontWeight: 700,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
