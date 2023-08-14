import React from "react";
import home from "./Homepage.module.css";
import Link from "next/link";

function Homepage() {
  return (
    <div className={home.background}>
      <Link href="/community">Go to Community</Link>
    </div>
  );
}

export default Homepage;
