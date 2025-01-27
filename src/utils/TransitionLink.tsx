"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import styles from "../components/layout/navigation/Header.module.scss";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  id: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ children, href, id, ...props }: TransitionLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const main = document.querySelector("main");

    main?.classList.add("page-exit");

    await sleep(300);

    router.push(href);

    main?.classList.remove("page-exit");
    main?.classList.add("page-enter");

    await sleep(300);

    main?.classList.remove("page-enter");
  };

  return (
    <li key={id} className={pathname === href ? styles.active : ""}>
      <Link onClick={handleTransition} href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default TransitionLink;
