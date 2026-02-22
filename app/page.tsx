import Gallery from "@/components/features/Gallery";
import MenuSection from "@/components/features/MenuSection";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-32 px-6 md:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.5em] text-zinc-500">
              {"L'Expérience"}
            </span>
            <h2 className="text-4xl md:text-6xl serif italic">
              {"L'Art de prendre de la hauteur"}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {
                "Perché au-dessus du tumulte parisien, Le Balcon offre une parenthèse suspendue. Entre ombre et lumière, notre cuisine se veut pure, brute, et résolument moderne. Chaque assiette est un monochrome de saveurs, une quête de l'essentiel."
              }
            </p>
            <div className="pt-8">
              <div className="h-px w-24 bg-white mx-auto"></div>
            </div>
          </div>
        </section>
        <section className="flex justify-center" id="gallery">
          <Gallery />
        </section>
        <MenuSection />
        <Footer />
      </main>
    </div>
  );
}
