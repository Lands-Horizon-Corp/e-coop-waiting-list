"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or the default logo during SSR
    return (
      <Link className="w-14" href="/">
        <Image
          alt="E-Coop Logo"
          height={300}
          src="/images/logo-white.webp"
          style={{ width: "auto", height: "auto" }}
          width={300}
          priority
        />
      </Link>
    );
  }

  return (
    <Link className="w-14" href="/">
      <Image
        alt="E-Coop Logo"
        height={300}
        style={{ width: "auto", height: "auto" }}
        width={300}
        src={
          resolvedTheme === "dark"
            ? "/images/logo-white.webp"
            : "/images/logo-dark.webp"
        }
        priority
      />
    </Link>
  );
};

export default Logo;
