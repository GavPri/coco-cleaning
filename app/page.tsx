import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <main className="mx-auto w-full flex flex-col gap-16">
      <Hero />
      <Services/>
      <Testimonials />
    </main >
  );
}
