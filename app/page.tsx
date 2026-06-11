"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sender...");

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("Takk! Du står nå på listen, og vi tar kontakt når neste versjon er klar.");
      setEmail("");
    } else {
      setStatus("Noe gikk galt, prøv igjen.");
    }
  };

  return (
    <main className="min-h-screen text-[#17201f]">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/65">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/icon-192.png" alt="HeleMåneden" className="h-9 w-9 rounded-2xl shadow-md" />
            <span className="font-semibold text-sm tracking-tight">HeleMåneden</span>
          </div>

          <a href="#signup" className="hm-chip hover:opacity-80 transition">
            Bli med
          </a>
        </div>
      </header>

      <section className="w-full px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hm-chip mb-7">
              Vi bygger økonomisk navigasjon for hverdagen
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              Hva kan du trygt bruke i dag?
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-md leading-relaxed">
              Du vet hvor mye penger du har, men vet du hvor mye som er trygt å bruke?
            </p>

            <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
              HeleMåneden hjelper deg å se hva du kan bruke i dag og denne uken, uten å gå tom før neste lønning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="#signup" className="hm-button inline-flex items-center justify-center px-8 py-4 text-lg font-medium">
                Bli med på ventelisten
              </a>

              <span className="text-sm text-gray-500">
                Neste versjon er under utvikling
              </span>
            </div>
          </div>

          <div className="hm-panel p-6 md:p-8">
            <div className="hm-money-card p-7 md:p-8 mb-8">
              <p className="text-sm text-gray-500 mb-2">Trygt å bruke i dag</p>
              <p className="text-5xl md:text-6xl font-semibold tracking-tight mb-3">247 kr</p>
              <p className="text-sm text-gray-500">
                Denne uken: <span className="text-[#17201f] font-medium">1 890 kr</span>
              </p>
            </div>

            <img
              src="/app.png"
              alt="HeleMåneden app"
              className="max-w-md w-full mx-auto opacity-95 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="hm-chip mb-6">Problemet</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Saldoen svarer ikke på det du egentlig burde styre etter
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              "Har jeg egentligråd til dette i dag?",
              "Hva skjer hvis jeg kjøper dette nå?",
              "Hvor mye bør være igjen til resten av måneden?",
              "Kommer jeg til å gå tom før neste lønn?",
            ].map((text) => (
              <div key={text} className="hm-card p-6 transition-transform hover:-translate-y-1">
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto rounded-[38px] bg-[#1F2A2A] text-white p-9 md:p-16 shadow-[18px_24px_45px_rgba(31,42,42,0.28),-10px_-10px_28px_rgba(255,255,255,0.75)]">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 mb-6 shadow-inner">
              Innsikten
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Det handler ikke bare om budsjett
            </h2>

            <p className="text-white/75 text-lg leading-relaxed">
              Mange sjekker saldoen før de handler. Problemet er at saldoen ikke forteller hva som er trygt å bruke.
              Derfor ender mange opp med å gjette.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="hm-chip mb-6">Slik fungerer det</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            HeleMåneden gjør saldo om til retning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {[
            {
              number: "1",
              title: "Start med pengene du faktisk kan bruke",
              text: "Når faste utgifter, sparing og buffer er satt til side, ser du hva som er igjen til hverdagen.",
            },
            {
              number: "2",
              title: "Få et trygt dagsbeløp",
              text: "HeleMåneden fordeler pengene over tiden frem til neste inntekt. Du får ett tall for i dag og ett for denne uken.",
            },
            {
              number: "3",
              title: "Justeres når livet skjer",
              text: "Bruker du mer én dag, justeres resten. Bruker du mindre, får du mer rom senere.",
            },
          ].map((item) => (
            <div key={item.number} className="hm-card p-8 transition-transform hover:-translate-y-1">
              <div className="h-11 w-11 rounded-2xl bg-[#BFF4DF] flex items-center justify-center font-semibold mb-6 shadow-[6px_8px_14px_rgba(31,42,42,0.14),-5px_-5px_12px_rgba(255,255,255,0.95)]">
                {item.number}
              </div>
              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto hm-panel p-9 md:p-16">
          <div className="max-w-3xl">
            <p className="hm-chip mb-6">Verdien</p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Trygghet mellom lønningene
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Målet er ikke å begrense deg. Målet er å gi deg trygghet til å bruke penger på det du faktisk vil — med bedre oversikt over resten av måneden.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="hm-card p-8 md:p-11 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Et tydeligere beslutningssignal
          </h2>

          <p className="text-gray-600 leading-relaxed">
            HeleMåneden bygger på en fremtidsrettet beregning som følger tid, forbruk og tilgjengelige penger.
            I stedet for bare å vise hva som har skjedd, hjelper HeleMåneden deg å forstå hva som er trygt videre.
          </p>
        </div>
      </section>

      <section id="signup" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="hm-chip mb-6">Venteliste</p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Bli med på reisen
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Vi utvikler nå neste versjon av HeleMåneden. Legg igjen e-postadressen din hvis du vil få tidlig tilgang, teste nye versjoner eller følge reisen videre.
            </p>
          </div>

          <div className="hm-card p-7 md:p-9">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din e-postadresse"
                className="hm-input px-5 py-4 text-base"
                required
              />

              <button type="submit" className="hm-button px-6 py-4 font-medium">
                Jeg vil bli med
              </button>

              {status && <p className="text-sm text-[#2F6F5E] mt-2">{status}</p>}
            </form>

            <p className="text-sm text-gray-500 mt-6 leading-relaxed">
              HeleMåneden utvikles videre basert på brukertesting og innsikt fra ekte hverdagsøkonomi.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full mt-10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-800 mb-1">HeleMåneden</p>
            <p className="text-sm text-gray-500">
              Vi bygger økonomisk navigasjon for hverdagen
            </p>
          </div>

          <div className="text-sm text-gray-500">Følg reisen</div>

          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/kjellkjellkjell/" target="_blank" rel="noopener noreferrer" className="text-[#63B7AE] hover:opacity-70 transition">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/helemaneden/" target="_blank" rel="noopener noreferrer" className="text-[#63B7AE] hover:opacity-70 transition">
              Instagram
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 pb-6">
          © {new Date().getFullYear()} HeleMåneden
        </div>
      </footer>
    </main>
  );
}