import { Hero } from "@/components/home/hero";
import { ExperienceGrid } from "@/components/home/experience";
import { AulysShowcase } from "@/components/home/aulys-showcase";
import { Testimonials } from "@/components/home/testimonials";
import { ComponentLab } from "@/components/home/component-lab";
import { SelectedWork } from "@/components/home/selected-work";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { MotionSection } from "@/components/layout/motion-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MotionSection><Hero /></MotionSection>
      <MotionSection delay={0.1}><AulysShowcase /></MotionSection>
      <MotionSection delay={0.1}><ExperienceGrid /></MotionSection>
      <MotionSection delay={0.1}><Testimonials /></MotionSection>
      <MotionSection delay={0.1}><ComponentLab /></MotionSection>
      <MotionSection delay={0.1}><SelectedWork /></MotionSection>
      <MotionSection delay={0.1}><About /></MotionSection>
      <MotionSection delay={0.1}><Contact /></MotionSection>
    </div>
  );
}
