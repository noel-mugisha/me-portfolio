import React from "react";

export default function Brackets({ brackets, second = false }) {
  return <span className={second ? "accent-4" : "accent-3"}>{brackets}</span>;
}
