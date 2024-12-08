import NavigationBar from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <main className="mx-2">
      <NavigationBar />
      <Hero />
      <Services/>
    </main >
  );
}
