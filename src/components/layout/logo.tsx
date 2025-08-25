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
      <Link href="/">
        <Image
          alt="E-Coop Logo"
          height={200}
          src="/images/logo-white.webp"
          width={50}
        />
      </Link>
    );
  }

  return (
    <Link href="/">
      <Image
        alt="E-Coop Logo"
        height={200}
        width={50}
        src={
          resolvedTheme === "dark"
            ? "/images/logo-white.webp"
            : "/images/logo-dark.webp"
        }
      />
    </Link>
  );
};

export default Logo;
