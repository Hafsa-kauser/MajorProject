

import type { JSX } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#f" },
  { label: "Docs", href: "/Docs" },
  { label: "GitHub", href: "#g" },
 
];





export interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

