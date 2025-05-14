import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string,
  children: ReactNode,
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
  >
    {children}
  </Link>
);
