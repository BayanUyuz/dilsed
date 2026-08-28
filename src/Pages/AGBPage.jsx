import React from "react";

export default function AGB() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-slate-300">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-white tracking-tight">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-8 backdrop-blur-sm shadow-xl text-sm leading-relaxed">
        {/* § 1 Geltungsbereich */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 1 Geltungsbereich & Vertragspartner
          </h2>
          <p className="text-slate-400">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Dienstleistungen, die Kunden über die Website von <strong className="text-slate-200">DilSed Design</strong> tätigen. Vertragspartner ist DilSed Design.
          </p>
        </section>

        {/* § 2 Vertragsschluss */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 2 Vertragsschluss
          </h2>
          <p className="text-slate-400">
            Die Darstellung der Produkte und Dienstleistungen im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch das Anklicken des Bestellbuttons geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren oder Dienstleistungen ab.
          </p>
        </section>

        {/* § 3 Preise und Zahlung */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 3 Preise und Zahlungsbedingungen
          </h2>
          <p className="text-slate-400">
            Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG wird die Umsatzsteuer nicht gesondert ausgewiesen (Kleinunternehmerregelung), sofern nicht anders angegeben. Die Zahlung erfolgt über die im Bestellprozess zur Verfügung gestellten Zahlungsmethoden.
          </p>
        </section>

        {/* § 4 Leistungserbringung & digitale Güter */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 4 Lieferung & Digitale Produkte
          </h2>
          <p className="text-slate-400">
            Digitale Produkte (z. B. Grafiken, Overlays, Design-Templates) werden nach Zahlungseingang per Download-Link oder E-Mail bereitgestellt. Bei individuellen Auftragsarbeiten gelten die jeweils vereinbarten Bearbeitungszeiten.
          </p>
        </section>

        {/* § 5 Widerrufsrecht */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 5 Widerrufsrecht bei digitalen Inhalten
          </h2>
          <p className="text-slate-400">
            Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten, wenn der Verbraucher ausdrücklich zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird.
          </p>
        </section>

        {/* § 6 Urheberrecht */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 6 Nutzungsrechte & Urheberrecht
          </h2>
          <p className="text-slate-400">
            Alle von DilSed Design erstellten Designs, Grafiken und Inhalte sind urheberrechtlich geschützt. Der Kunde erhält mit der vollständigen Bezahlung das einfache, nicht übertragbare Recht, die Designs für den vereinbarten Zweck (z. B. auf eigenen Streaming-Kanälen) zu nutzen.
          </p>
        </section>

        {/* § 7 Schlussbestimmungen */}
        <section>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            § 7 Schlussbestimmungen
          </h2>
          <p className="text-slate-400">
            Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
          </p>
        </section>
      </div>
    </div>
  );
}