import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const DesktopMenu = () => {
  return (
    <NavigationMenu className="list-none">
      {navLinks.map((link) => (
        <NavigationMenuItem key={link.href}>
          <Link href={link.href}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {link.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
};

export default DesktopMenu;
