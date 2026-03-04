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
      setStatus("Takk for at du vil være med, vi tar kontakt når piloten starter.");
      setEmail("");
    } else {
      setStatus("Noe gikk galt, prøv igjen.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-start px-6">

      {/* HERO */}
      <section className="max-w-2xl w-full py-24 text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          En enklere måte å styre hverdagsøkonomien på.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Se hva du trygt kan bruke hver dag og uke, helt frem til neste lønning.
        </p>

        <a
          href="#signup"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg hover:opacity-90 transition"
        >
          Bli med i åpen pilot
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Gratis, 2 minutter å melde seg på.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-2xl w-full py-16 text-left">
        <h2 className="text-2xl font-semibold mb-6">
          Kjenner du deg igjen?
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>Du vet hva som står på konto, men ikke hva som faktisk er trygt å bruke</li>
          <li>Starten av måneden føles oversiktlig, slutten mindre</li>
          <li>Småkjøp skaper mer usikkerhet enn de burde</li>
          <li>Du ønsker buffer, men mister oversikten underveis</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-2xl w-full py-16 text-left">
        <h2 className="text-2xl font-semibold mb-8">
          Slik fungerer det
        </h2>

        <div className="space-y-8 text-gray-800">
          <div>
            <h3 className="font-semibold mb-2">
              1. Skill ut det faste først
            </h3>
            <p>
              Flytt faste utgifter til en egen konto og legg inn neste lønning.
              Da vet vi hva som faktisk er tilgjengelig.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              2. Se hva som er trygt å bruke
            </h3>
            <p>
              Du får ett konkret beløp for i dag og denne uken, basert på det som er igjen etter det faste.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              3. Følg med, uten å regne
            </h3>
            <p>
              Forbruket justeres først innenfor uken.
              Bare hvis du går over ukens ramme, påvirkes resten av perioden.
            </p>
          </div>
        </div>

        <p className="mt-10 text-gray-600">
          Enkelt, oversiktlig, forutsigbart.
        </p>
      </section>

      {/* PILOT INFO */}
      <section className="max-w-2xl w-full py-16 text-left">
        <h2 className="text-2xl font-semibold mb-6">
          Hva innebærer piloten?
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>Du tester løsningen i din egen hverdag</li>
          <li>Du gir kort tilbakemelding underveis</li>
          <li>Du er med på å forme videre utvikling</li>
        </ul>

        <p className="mt-8 text-gray-600">
          HeleMåneden testes nå med brukere i Norge for å dokumentere effekt på økonomisk trygghet og bufferbygging.
        </p>

        <p className="text-gray-600">
          Utviklet med fokus på struktur, forutsigbarhet og redusert kognitiv belastning.
        </p>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="max-w-2xl w-full py-24 text-left">
        <h2 className="text-3xl font-bold mb-6">
          Bli med i åpen pilot
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Din e postadresse"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Jeg vil bli med
          </button>

          {status && (
            <p className="text-sm text-green-600 mt-2">
              {status}
            </p>
          )}
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Gratis og uforpliktende, vi sender kun informasjon om testperioden.
        </p>
      </section>

      <footer className="py-10 text-sm text-gray-500 w-full max-w-2xl text-left">
        © {new Date().getFullYear()} HeleMåneden
      </footer>
    </main>
  );
}