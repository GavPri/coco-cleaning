import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent, CardHeader } from "./card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    review:
      "I was amazed by the quality and efficiency of the cleaning team. They left no corner untouched, and my home has never looked better. Highly recommended for anyone looking for top-tier cleaning services!",
  },
  {
    name: "Sami",
    review:
      "I couldn't be happier with the service! The team was punctual, professional, and left my office spotless. It’s clear they care about their customers and take pride in their work.",
  },
  {
    name: "Gavin",
    review:
      "This is hands down the best cleaning company in Manchester! From the booking process to the final result, everything was seamless. My Airbnb looks fantastic after every changeover, thanks to their meticulous attention to detail.",
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col mb-6 bg-mutedbackground">
      <h2 className="text-2xl font-bold my-6 font-sans italic w-full inline-flex justify-between items-center">
        Reviews{" "}
        <Link
          href="https://www.facebook.com/profile.php?id=100087234579156&sk=reviews" target="_blank"
          className="text-sm font-thin font-sans inline-flex"
        >
          Read more <ArrowRight className="ml-2" />
        </Link>
      </h2>
      <Carousel>
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.review} className="basis-5/6 md:basis-2/3">
              <Card className="h-fit bg-background text-foreground font-sans">
                <CardHeader className="text-xl font-bold">{t.name}</CardHeader>
                <CardContent className="italic text-thin text-lg">
                  &quot;{t.review}&quot;
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
