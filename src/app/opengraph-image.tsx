import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "Ivan Saldano";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Hi, I&apos;m Ivan
      </div>
    ),
    {
      ...size,
    }
  );
}
