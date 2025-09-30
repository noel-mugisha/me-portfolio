import React from "react";
import Editor from "./Editor";
import MainNav from "./MainNav";
export default function () {
  return (
    <main className="flex w-full" style={{ height: "90%" }}>
      <MainNav />
      <Editor />
    </main>
  );
}
