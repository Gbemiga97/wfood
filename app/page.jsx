import Hero from "@/components/Hero";
import StyleGuide from "@/components/StyleGuide";

export default function Home() {
  return (
  <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
    {/* <StyleGuide /> */}
    <Hero />
    <div className="h-[4000px]" />
  </main>
  )
}
