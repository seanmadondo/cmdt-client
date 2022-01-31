import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/overview">
        <a>Overview</a>
      </Link>
      <Link href="/fingerprint">
        <a>Fingerprint</a>
      </Link>
      <Link href="/network">
        <a>Network</a>
      </Link>
      <Link href="/grants">
        <a>Grants</a>
      </Link>
    </nav>
  );
};
