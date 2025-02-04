import Link, { LinkProps } from "next/link";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
