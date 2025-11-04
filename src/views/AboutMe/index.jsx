import React from "react";
import { useSelector } from "react-redux";
import CertificatesViewer from "./CertificatesViewer"; // --- IMPORT the new component
import CodeSnippets from "./CodeSnippets";
import Editor from "./Editor";
import MainNav from "./MainNav";
import SideNav from "./SideNav";
import Skills_Certificates_Viewer from "./Skills_Certificates_Viewer";

export default function () {
  let active_sidenav = useSelector((state) => state.active_sidenav);

  const renderActiveView = () => {
    switch (active_sidenav) {
      case 0: // Skills
        return <Skills_Certificates_Viewer />;
      case 1: // Personal Info
        return (
          <>
            <Editor />
            <CodeSnippets />
          </>
        );
      case 2: // Certificates
        return <CertificatesViewer />;
      default: // Hobbies, etc.
        return <Skills_Certificates_Viewer />;
    }
  };

  return (
    <main className="flex w-full" style={{ height: "90%" }}>
      <SideNav />
      <MainNav />
      {renderActiveView()}
    </main>
  );
}