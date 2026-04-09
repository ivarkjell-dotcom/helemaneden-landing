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
      setStatus("Takk for at du vil være med, vi tar kontakt når testen starter.");
      setEmail("");
    } else {
      setStatus("Noe gikk galt, prøv igjen.");
    }
  };

  return (
    <main className="min-h-screen text-gray-900 px-6 bg-gradient-to-b from-white via-gray-50 to-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <img src="/icon-192.png" alt="HeleMåneden" className="h-8 w-8 rounded-md" />
            <span className="font-semibold text-sm">HeleMåneden</span>
          </div>

          <a href="#signup" className="text-sm font-medium text-gray-700 hover:text-black transition">
            Bli med
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-white via-[#EAF6F5] to-[#F8FBFB]">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">

          <div className="text-left">
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
              Hverdagsøkonomi, gjort enklere
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Hva kan du trygt bruke i dag?
            </h1>

            <p className="text-lg text-gray-600 mb-4 max-w-sm">
              Bruk penger med trygghet.  
              Se hva du kan bruke – i dag og denne uken.
            </p>

            <p className="text-gray-500 mb-6 max-w-sm">
              HeleMåneden hjelper deg å se fremtiden basert på din økonomiske nåtid.
            </p>

            <a
              href="#signup"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg font-medium transition transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Bli med i test
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/mockup.png"
              alt="HeleMåneden app"
              className="max-w-md w-full opacity-95"
            />
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="flex justify-center pb-6">
          <div className="animate-bounce text-gray-400 text-sm">
            ↓
          </div>
        </div>

      </section>

      {/* PROBLEM */}
      <section className="max-w-3xl mx-auto w-full py-20 text-left">
        <h2 className="text-2xl font-semibold mb-6">
          Kjenner du deg igjen?
        </h2>

        <div className="space-y-3 text-gray-700">
          <p>Du vet hva som står på konto, men ikke hva som faktisk er trygt å bruke</p>
          <p>I starten av måneden føles det som du har god råd, mot slutten mindre</p>
          <p>Små kjøp skaper mer usikkerhet enn de burde</p>
          <p>Du ønsker bedre kontroll, men mister oversikten underveis</p>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="w-full py-20 bg-gray-900 text-white px-6">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl font-semibold mb-6">
            Det som mangler er ikke kontroll
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Det som mangler er trygghet i øyeblikket du skal ta et valg.  
            Når du vet hva du trygt kan bruke, blir det enklere å bestemme seg.  
            Du slipper å lure, og slipper å angre.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto w-full py-20 text-left">
        <h2 className="text-2xl font-semibold mb-8">
          Slik fungerer det
        </h2>

        <div className="space-y-8 text-gray-800">
          <div>
            <h3 className="font-semibold mb-2">1. Skill ut det faste først</h3>
            <p>Sett av penger til faste utgifter når du får lønn.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. Se hva som er trygt å bruke</h3>
            <p>Du får ett konkret beløp for i dag og denne uken.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. Følg med, uten å regne</h3>
            <p>Bruker du mer én dag, justeres resten automatisk.</p>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          Enkelt, oversiktlig og forutsigbart.
        </p>
      </section>

      {/* VALUE */}
      <section className="max-w-3xl mx-auto w-full py-20 text-left">
        <h2 className="text-2xl font-semibold mb-6">
          Hva gir det deg?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Det blir enklere å ta valg. Du vet hva du har råd til, og kan bruke penger på det du egentlig vil.
        </p>
      </section>

      {/* FLAKLYPA / TECH */}
      <section className="max-w-3xl mx-auto w-full py-20 text-left">
        <p className="text-sm text-gray-500 leading-relaxed">
          For spesielt interesserte:  
          HeleMåneden er bygget på en helautomatisk, fremtidsfokusert beslutnings- og likviditetsmotor  
          som kontinuerlig beregner hva du trygt kan bruke basert på tid, forbruk og tilgjengelige midler.
        </p>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="max-w-3xl mx-auto w-full py-20 text-left">
        <h2 className="text-3xl font-semibold mb-6">
          Bli med og test
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e-postadresse"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-[1.03]"
          >
            Jeg vil bli med
          </button>

          {status && (
            <p className="text-sm text-green-600 mt-2">
              {status}
            </p>
          )}
        </form>

        <p className="text-sm text-gray-500 mt-4 max-w-md">
          Test løsningen gratis fra 1. mai til 30. juni.  
          Begrenset antall testplasser.
        </p>
      </section>

      <footer className="py-8 text-sm text-gray-500 max-w-5xl mx-auto text-left">
        © {new Date().getFullYear()} HeleMåneden
      </footer>

    </main>
  );
}