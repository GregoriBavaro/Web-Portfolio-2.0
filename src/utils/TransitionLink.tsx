"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import styles from "../components/layout/navigation/Header.module.scss";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const pathname = usePathname();

  return (
    <li className={pathname === href ? styles.active : ""}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default TransitionLink;
