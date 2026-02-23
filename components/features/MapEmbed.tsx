const MapEmbed = () => {
  return (
    <section className="">
      <div className="max-w-xl mx-auto h-[300px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158602789!2d2.3029!3d48.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4b0e71b8b%3A0x60f80b36e1c6b1a4!2s12%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Le Balcon — 12 Avenue des Champs-Élysées, Paris"
        />
      </div>
    </section>
  );
};

export default MapEmbed;
