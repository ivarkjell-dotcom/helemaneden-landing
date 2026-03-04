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
      setStatus("Takk for påmeldingen!");
      setEmail("");
    } else {
      setStatus("Noe gikk galt. Prøv igjen.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6">

      {/* HERO */}
      <section className="max-w-2xl w-full py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-left">
          Få ett trygt tall å forholde deg til mellom lønninger.
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-left">
          HeleMåneden viser hva du trygt kan bruke hver dag og uke – uten kompliserte budsjetter.
        </p>

        <a
          href="#signup"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl text-lg hover:opacity-90 transition"
        >
          Bli med i brukertest
        </a>

        <p className="text-sm text-gray-500 mt-4 text-left">
          Gratis. Ingen binding. Begrenset antall plasser.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-xl w-full py-16">
        <h2 className="text-2xl font-semibold mb-6 text-left">
          Kjenner du deg igjen?
        </h2>

        <ul className="space-y-3 text-gray-700 text-left">
          <li>Du vet ikke helt hva du faktisk kan bruke i dag</li>
          <li>Du håper det holder til neste lønning</li>
          <li>Småkjøp skaper større stress enn de burde</li>
          <li>Du sjekker saldo oftere enn du vil innrømme</li>
        </ul>

        <p className="mt-8 text-gray-600 text-left">
          Problemet er ikke viljestyrke. Det er mangel på tydelig struktur.
        </p>
      </section>

      {/* LØSNING */}
      <section className="max-w-xl w-full py-16">
        <h2 className="text-2xl font-semibold mb-6 text-left">
          Hva gjør HeleMåneden?
        </h2>

        <ul className="space-y-3 text-gray-700 text-left">
          <li>Ett trygt dagstall</li>
          <li>Ett trygt uketall</li>
          <li>Oversikt frem til neste lønning</li>
          <li>Mindre mental belastning</li>
        </ul>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="max-w-xl w-full py-24">
        <h2 className="text-3xl font-bold mb-6 text-left">
          Vil du være med i brukertesten?
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Meld meg på
          </button>

          {status && (
            <p className="text-sm text-green-600 mt-2">
              {status}
            </p>
          )}
        </form>

        <p className="text-sm text-gray-500 mt-4 text-left">
          Vi sender kun informasjon om brukertesten. Ingen spam.
        </p>
      </section>

      <footer className="py-10 text-sm text-gray-500 w-full max-w-xl text-left">
        © {new Date().getFullYear()} HeleMåneden
      </footer>
    </main>
  );
}