"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";

interface NavigationProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  index: number;
}

const Navigation = ({ children, href, index }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <li id={index.toString()} className={pathname === href ? styles.active : ""}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default Navigation;
