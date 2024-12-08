"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { ArrowUpRight, Calendar, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="mt-4 flex flex-col items-start gap-8 md:flex-row-reverse">
      <Image
        src={"/images/cocologo.jpg"}
        alt="coco cleaning co logo"
        width={300}
        height={300}
        className="rounded-md"
      />
      <div className="flex gap-6 flex-col md:items-start h-[300px]">
        <h1 className="text-3xl font-bold tracking-wide font-mono text-foreground">
          Manchester's Premier <br className="md:hidden"></br>Cleaning Services
        </h1>
        <p className="text-muted-forground max-w-lg text-xl hidden md:flex">
          Expert cleaning services in Manchester for a spotless,<br></br> fresh
          home or business. Affordable and reliable!
        </p>
        <div className="flex gap-2 w-full items-start">
          <Button className="h-16 md:h-9 text-background bg-gradient-to-tr from-blue-500 to to-blue-800">
            Book <Calendar size={20} />
          </Button>
          <Button
            className="h-16 md:h-9"
            variant={"outline"}
            onClick={() => (window.location.href = "tel:+353834802446")}
          >
            Call <Phone />
          </Button>
          <Button
            className="h-16 md:h-9"
            variant={"outline"}
            onClick={() =>
              (window.location.href =
                "mailto:info@yourcompany.com?subject=Inquiry&body=Hello, I would like to know more about your services.")
            }
          >
            Email <Mail />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
