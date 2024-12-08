import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Card, CardContent, CardHeader } from "./card";

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
    <section className="mb-6 bg-mutedbackground">
      <h2 className="text-xl font-bold my-6">What others have to say...</h2>
      <Carousel>
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.review}>
              <Card className="h-[300px]">
                <CardHeader className="text-xl font-bold">{t.name}</CardHeader>
                <CardContent className="italic text-thin text-lg">
                  `&quot;`{t.review}`&quot;`
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
};

export default Testimonials;
