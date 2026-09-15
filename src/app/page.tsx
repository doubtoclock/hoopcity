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
import GlobalBackground from "@/components/GlobalBackground";

export default function Home() {
  return (
    <main className="relative bg-transparent">
      <GlobalBackground />
      
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
