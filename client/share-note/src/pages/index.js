import Homepage from "../components/Homepage/Homepage";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import dynamic from "next/dynamic";

export default function Home() {
  const DynamicEditor = dynamic(
    () => import("../components/NoteTest/SimpleDraftEditor"),
    {
      ssr: false,
    }
  );

  function ComponentUsingEditor() {
    return;
  }

  return (
    <div>
      <DynamicEditor />;
    </div>
  );
}
