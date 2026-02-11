import { Hero } from "@/components/home/hero";
import { Work } from "@/components/home/work";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
