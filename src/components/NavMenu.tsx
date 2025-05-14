'use client'

import { NavLink } from "@/components/NavLink";
import { useEffect, useState } from 'react';

const menuItems = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/',
    text: 'Blog',
  },
  {
    href: '/',
    text: 'Projects',
  },
  {
    href: '/',
    text: 'Email',
  },
  {
    href: '/',
    text: 'GitHub',
  },
  {
    href: '/',
    text: 'LinkedIn',
  },
];

export const NavMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'ArrowDown') {
      setSelectedIndex((prev) => prev + 1 >= menuItems.length ? 0 : prev + 1);
    }
    else if (e.key == 'ArrowUp') {
      setSelectedIndex((prev) => prev - 1 < 0 ? menuItems.length - 1 : prev - 1);
    }
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <li
          className={`${index == selectedIndex ? 'animate-pulse' : ''}`}
          key={menuItem.text}
          onClick={(e) => handleClick(index)}
        >
          <NavLink href={menuItem.href}>
            {selectedIndex == index ? '-> ' : ''}
            {menuItem.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
