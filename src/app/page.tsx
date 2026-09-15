import IntroOverlay from "@/components/Intro/IntroOverlay";
import Navbar from "@/components/Hero/Navbar";
import Hero from "@/components/Hero/Hero";
import SponsorsTicker from "@/components/SponsorsTicker/SponsorsTicker";
import Ecosystem from "@/components/Ecosystem/Ecosystem";
import InfiniteCulture from "@/components/InfiniteCulture/InfiniteCulture";
import TheCut from "@/components/TheCut/TheCut";
import TheLeague from "@/components/TheLeague/TheLeague";
import Tickets from "@/components/Tickets/Tickets";
import CityShift from "@/components/CityShift/CityShift";
import Partners from "@/components/Partners/Partners";
import Memories from "@/components/Memories/Memories";
import Stories from "@/components/Stories/Stories";
import NextSeason from "@/components/NextSeason/NextSeason";
import Footer from "@/components/Footer/Footer";
import TheRules from "@/components/TheRules/TheRules";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-transparent">
      
      {/* Global Ambient Lighting Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        
        {/* Grainy Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />
        
        {/* Subtle Ambient Neon Gradients "here and there" */}
        <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#F40B9B]/[0.05] blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#FF6100]/[0.04] blur-[120px] md:blur-[180px]" />
        <div className="absolute top-[60%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[#FF6100]/[0.03] blur-[100px]" />
        <div className="absolute top-[30%] left-[10%] w-[25vw] h-[25vw] rounded-full bg-[#F40B9B]/[0.02] blur-[80px]" />
        
      </div>

      <IntroOverlay />
      <Navbar />
      <Hero />
      <SponsorsTicker />
      <Ecosystem />
      <TheCut />
      <TheRules />
      <InfiniteCulture />
      <TheLeague />
      <Tickets />
      <CityShift />
      <Partners />
      <Memories />
      <Stories />
      <NextSeason />
      <Footer />
    </main>
  );
}
