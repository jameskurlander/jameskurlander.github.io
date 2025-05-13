import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string,
  children: ReactNode,
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className='text-lg text-green-400 hover:animate-pulse'
  >
    {children}
  </Link>
);
