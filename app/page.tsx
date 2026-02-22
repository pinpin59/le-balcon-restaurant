import AboutSection from "@/components/features/AboutSection";
import Gallery from "@/components/features/Gallery";
import MenuSection from "@/components/features/MenuSection";
import Reservation from "@/components/features/Reservation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <section className="flex justify-center" id="gallery">
          <Gallery />
        </section>
        <MenuSection />
        <Reservation />
        <Footer />
      </main>
    </div>
  );
}
