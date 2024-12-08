import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type SocialMediaLink = {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const socialMediaLinks: SocialMediaLink[] = [
  { href: "/instagram.com", icon: Instagram },
  { href: "/tiktok.com", icon: FaTiktok },
  { href: "/facebook.com", icon: Facebook },
];

const Footer = () => {
  return (
    <footer className="h-32 mb-4 bg-background text-foreground max-w-3xl mx-auto mt-6 flex justify-between items-center">
        <Image src="/images/cocologo.jpg" width={100} height={100} alt="logo" />
      
      <div className="flex gap-2">
        {socialMediaLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={buttonVariants({ variant: "outline" })}
          >
            <link.icon size={40} className="mr-2" />{" "}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
