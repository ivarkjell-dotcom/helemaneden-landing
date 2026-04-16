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
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 items-center">

          <div className="text-left">
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
              Hverdagsøkonomi, gjort enklere
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6">
              Hva kan du trygt bruke i dag?
            </h1>

            <p className="text-lg text-gray-600 mb-4 max-w-sm">
              Bruk penger med trygghet.  
              Se hva du kan bruke, i dag og denne uken.
            </p>

            <p className="text-gray-500 mb-4 max-w-sm">
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
              src="/app.png"
              alt="HeleMåneden app"
              className="max-w-md w-full opacity-95 -mt-4 md:mt-0"
            />
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="flex justify-center -mt-20 mb-2">
  <div className="animate-bounce text-gray-400 text-lg opacity-70">
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
<section className="w-full py-20 bg-[#1F2A2A] text-white px-6">
  <div className="max-w-3xl mx-auto text-left">
    <h2 className="text-2xl font-semibold mb-6">
      Det mangler ikke kontroll
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

        <div className="space-y-10 text-gray-800">

  <div>
    <h3 className="font-semibold mb-1">
      1. Skill ut det faste først
    </h3>
    <p className="mb-2">
      Sett av penger til faste utgifter, og regninger du vet kommer, når du får lønn.
    </p>
    <p className="text-sm text-gray-400">
      For eksempel husleie, strøm og abonnementer. Ikke glem buffer og sparing
    </p>
    <p className="text-sm text-gray-600">
      Det som er igjen er det du faktisk har til forbruk.
    </p>
  </div>

  <div>
    <h3 className="font-semibold mb-1">
      2. Se hva som er trygt å bruke
    </h3>
    <p className="mb-2">
      Du får ett konkret beløp for i dag og denne uken.
    </p>
    <p className="text-sm text-gray-400">
      Et tall du kan bruke før og etter ukeshandelen, når du står i butikken eller vurderer et kjøp.
    </p>
  </div>

  <div>
    <h3 className="font-semibold mb-1">
      3. Følg med, uten å regne
    </h3>
    <p className="mb-2">
      Bruker du mer én dag, justeres resten automatisk.
    </p>
    <p className="text-sm text-gray-400">
      Du slipper å regne selv. Tallet oppdaterer seg etter forbruk og tid.
    </p>
  </div>

</div>

        <p className="mt-8 text-gray-600">
          Enkelt, oversiktlig og forutsigbart.
        </p>
      </section>

      {/* VALUE */}
      {/* VALUE */}
      <section className="w-full py-20 bg-[#F5F1EA]">
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h2 className="text-2xl font-semibold mb-6">
          Hva gir det deg?
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed">
  Det blir enklere å ta valg.  
  Du vet hva du har råd til, og kan bruke penger på det du egentlig vil.
</p>
        </div>
      </section>

      {/* FLAKLYPA / TECH */}
      <section className="max-w-3xl mx-auto w-full py-20 text-left">
        <p className="text-sm text-gray-500 leading-relaxed">
          HeleMåneden er bygget på en helautomatisk, fremtidsfokusert beslutningssmotor  
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

      <footer className="w-full border-t border-gray-200 mt-10">
  <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

    {/* VENSTRE: Brand */}
    <div>
      <p className="font-medium text-gray-800 mb-1">
        HeleMåneden
      </p>
      <p className="text-sm text-gray-500">
        Hverdagsøkonomi, gjort enklere
      </p>
    </div>

    {/* MIDTEN: CTA / følelse */}
    <div className="text-sm text-gray-500">
      Følg reisen
    </div>

    {/* HØYRE: Sosiale ikoner */}
    <div className="flex items-center gap-5">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kjellkjellkjell/#:~:text=www.linkedin.com/in/kjellkjellkjell" // bytt hvis nødvendig
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#63B7AE] hover:opacity-70 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1 3.87 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.7h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V20h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-4V8z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/helemaneden/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#63B7AE] hover:opacity-70 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M7.75 2C4.68 2 2.25 4.43 2.25 7.5v9c0 3.07 2.43 5.5 5.5 5.5h8.5c3.07 0 5.5-2.43 5.5-5.5v-9c0-3.07-2.43-5.5-5.5-5.5h-8.5zm0 2h8.5c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-8.5c-1.93 0-3.5-1.57-3.5-3.5v-9c0-1.93 1.57-3.5 3.5-3.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
        </svg>
      </a>

    </div>

  </div>

  {/* BUNN */}
  <div className="text-center text-xs text-gray-400 pb-6">
    © {new Date().getFullYear()} HeleMåneden
  </div>
</footer>

    </main>
  );
}