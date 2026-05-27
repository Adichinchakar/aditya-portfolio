import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { MotionSection } from "@/components/layout/motion-section";

const About = dynamic(() => import("@/components/home/about").then((m) => ({ default: m.About })));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((m) => ({ default: m.Testimonials })));
const ComponentLab = dynamic(() => import("@/components/home/component-lab").then((m) => ({ default: m.ComponentLab })));
const Contact = dynamic(() => import("@/components/home/contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero and SelectedWork are above-fold — no MotionSection opacity:0 wrapper */}
      <Hero />
      <SelectedWork />
      <MotionSection delay={0.1}><About /></MotionSection>
      <MotionSection delay={0.1}><Testimonials /></MotionSection>
      <MotionSection delay={0.1}><ComponentLab /></MotionSection>
      <MotionSection delay={0.1}><Contact /></MotionSection>
    </div>
  );
}
