const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-zinc-900 text-center">
      <div className="space-y-6">
        <h3 className="text-3xl serif italic">Le Balcon</h3>
        <p className="text-zinc-500 text-sm tracking-widest uppercase">
          12 Avenue des Champs-Élysées, 75008 Paris
        </p>
        <div className="flex justify-center space-x-8 text-zinc-400 text-xs tracking-widest uppercase py-4">
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Presse
          </a>
        </div>
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2026 Le Balcon. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
