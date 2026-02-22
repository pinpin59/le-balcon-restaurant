"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TIME_SLOTS = ["19h30", "20h00", "20h30", "21h00", "21h30", "22h00"];

const Reservation = () => {
  const { t } = useLanguage();
  const r = t.reservation;
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1 Personne");
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="reservation"
        aria-labelledby="reservation-title"
        className="py-32 bg-white text-black"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="h-px w-24 bg-black mx-auto"></div>
          <h2 className="text-3xl md:text-5xl serif">{r.successTitle}</h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            {r.successPre}
            <span className="font-medium text-black">{name}</span>
            {r.successMid}
            <span className="font-medium text-black">{email}</span>
            {r.successPost}
          </p>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservation"
      aria-labelledby="reservation-title"
      className="py-32 bg-white text-black"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 id="reservation-title" className="text-5xl md:text-7xl serif">
          {r.title}
        </h2>
        <p className="text-zinc-600 max-w-xl mx-auto">{r.subtitle}</p>
        <form
          onSubmit={handleSubmit}
          aria-label={r.formAriaLabel}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelName}
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={r.namePlaceholder}
              className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelEmail}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={r.emailPlaceholder}
              className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelPhone}
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={r.phonePlaceholder}
              className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="date"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelDate}
            </label>
            <input
              id="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="time"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelTime}
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border-b border-zinc-200 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            >
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="guests"
              className="text-xs uppercase tracking-widest text-zinc-400"
            >
              {r.labelGuests}
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border-b border-zinc-200 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            >
              {r.guestOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="md:col-span-2 mt-8 bg-black text-white py-4 px-8 uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            {r.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
