import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import {
  ArrowLeftRight,
  ArrowRight,
  Building,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { GiVacuumCleaner } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { FaAirbnb } from "react-icons/fa";
import { ImOffice } from "react-icons/im";

const services = [
  {
    name: "Deep Cleaning",
    icon: GiVacuumCleaner,
    description:
      "A thorough, intensive cleaning service that reaches every corner, ideal for homes or offices needing a deep refresh.",
  },
  {
    name: "End of Tenancy (EOT) Cleaning",
    icon: ArrowLeftRight,
    description:
      "Complete cleaning for tenants moving out or landlords preparing for new tenants, ensuring the property is spotless.",
  },
  {
    name: "Commercial Cleaning",
    icon: Building,
    description:
      "Professional cleaning for businesses, providing a clean, healthy, and organized work environment for employees and clients.",
  },
  {
    name: "After Build Cleaning",
    icon: BsTools,
    description:
      "Post-construction cleaning to remove dust, debris, and any leftover materials, making your space ready to use.",
  },
  {
    name: "Home Cleaning",
    icon: HomeIcon,
    description:
      "Regular home cleaning that covers all areas, leaving your home tidy and fresh for you and your family.",
  },
  {
    name: "Airbnb Changeovers",
    icon: FaAirbnb,
    description:
      "Cleaning between guest stays to ensure your Airbnb is spotless and ready for new visitors, including linens and amenities.",
  },
  {
    name: "Offices Cleaning",
    icon: ImOffice,
    description:
      "Customized office cleaning to maintain a professional, hygienic environment, boosting productivity and employee well-being.",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="inline-flex items-center justify-between w-full text-2xl">
        Featured services{" "}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          View more <ArrowRight size={20} className="text-blue-500" />
        </Link>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.slice(0, 4).map((s) => (
          <Card className="hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer" key={s.description}>
            <CardHeader className="inline-flex text-2xl">
              <s.icon className="text-blue-500 mb-2" />
              {s.name}
            </CardHeader>
            <CardContent className="text-lg">{s.description}</CardContent>
            <CardFooter>
              <Link
                href="/services"
                className={buttonVariants({ variant: "outline" })}
              >
                Learn More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
