"use-client";

import { Facebook, Instagram, Menu, X } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

type MobileMenuProps = {
  openMenu: boolean;
  handleMenuClick: () => void;
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

type SocialMediaLink = {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const socialMediaLinks: SocialMediaLink[] = [
  { href: "/instagram.com", icon: Instagram },
  { href: "/tiktok.com", icon: FaTiktok },
  { href: "/facebook.com", icon: Facebook },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  openMenu,
  handleMenuClick,
}) => {
  return (
    <div
      className="h-12 w-12 grid items-center hover:cursor-pointer"
      onClick={handleMenuClick}
    >
      {openMenu ? <X size={30} /> : <Menu size={30} />}

      <div
        className={`absolute top-24 left-0 bg-muted-background h-[calc(100vh-96px)] w-screen flex flex-col transform transition-transform duration-300 ease-in-out ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavigationMenu className="list-none flex flex-col items-center w-screen gap-8 mt-4 pl-4 justify-start bg-background">
          {navLinks.map((link) => (
            <NavigationMenuItem className="w-screen" key={link.name}>
              <Link href={link.href}>
                <NavigationMenuLink className="text-left text-xl p-0 ">
                  {link.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <section className="mt-auto mb-24 flex gap-4 justify-between px-6 bg-background">
            {socialMediaLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={buttonVariants({ variant: "outline" })}
              >
                <link.icon size={40} className="mr-2" />{" "}
              </Link>
            ))}
          </section>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default MobileMenu;
