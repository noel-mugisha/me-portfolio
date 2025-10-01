import React from "react";

export default function StringColorizer({ string, onequote = false }) {
  return (
    <span className="accent-5" style={{ wordBreak: "break-all" }}>
      {(onequote ? "'" : '"') + string + (onequote ? "'" : '"')}
    </span>
  );
}