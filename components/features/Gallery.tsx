import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh] bg-black w-full">
      <div className="relative group overflow-hidden border-r border-zinc-900 h-full">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          alt="Gastronomy 1"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            La Matière
          </span>
        </div>
      </div>
      <div className="relative group overflow-hidden border-r border-zinc-900 h-full">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
          alt="Gastronomy 2"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Le Geste
          </span>
        </div>
      </div>
      <div className="relative group overflow-hidden h-full">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
          alt="Gastronomy 3"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Le Lieu
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
