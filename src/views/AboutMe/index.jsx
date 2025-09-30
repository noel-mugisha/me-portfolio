import React from "react";
import { useSelector } from "react-redux";
import CodeSnippets from "./CodeSnippets";
import Editor from "./Editor";
import MainNav from "./MainNav";
import SideNav from "./SideNav";
import Skills_Certificates_Viewer from "./Skills_Certificates_Viewer";

export default function () {
  let active_sidenav = useSelector((state) => state.active_sidenav);

  return (
    <main className="flex w-full" style={{ height: "90%" }}>
      <SideNav />
      <MainNav />
      {active_sidenav === 1 ? (
        <>
          {" "}
          <Editor />
          <CodeSnippets />
        </>
      ) : (
        <Skills_Certificates_Viewer />
      )}
    </main>
  );
}
