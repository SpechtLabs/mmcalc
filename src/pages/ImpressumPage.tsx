export function ImpressumPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Impressum</h1>

      <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <p className="text-gray-500 dark:text-gray-400 mb-3">Angaben gemaess &sect; 5 TMG</p>
          <p>
            Cedric Specht<br />
            Elbgaustrasse 73B<br />
            22523 Hamburg
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Kontakt</h2>
          <p>
            Telefon: 0176-20204039<br />
            E-Mail: <a href="mailto:impressum@specht-labs.de" className="text-teal-600 dark:text-teal-400 hover:underline">impressum@specht-labs.de</a>
          </p>
        </section>

        <section>
          <p className="text-gray-500 dark:text-gray-400 mb-2">Verantwortlich fuer den Inhalt nach &sect; 55 Abs. 2 RStV:</p>
          <p>
            Cedric Specht<br />
            Elbgaustrasse 73B<br />
            22523 Hamburg
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Haftungsausschluss</h2>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">Haftung fuer Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit groesster Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und
            Aktualitaet der Inhalte koennen wir jedoch keine Gewaehr uebernehmen. Als Diensteanbieter sind wir gemaess
            &sect; 7 Abs. 1 TMG fuer eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde
            Informationen zu ueberwachen oder nach Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
            hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung moeglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">Haftung fuer Links</h3>
          <p>
            Unser Angebot enthaelt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            koennen wir fuer diese fremden Inhalte auch keine Gewaehr uebernehmen. Fuer die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
            der Verlinkung auf moegliche Rechtsverstoesse ueberprueft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
            nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.
          </p>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
            beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur fuer den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Datenschutz</h2>
          <p>
            Die Nutzung unserer Webseite ist ohne Angabe personenbezogener Daten moeglich. Weitere Informationen entnehmen Sie
            bitte unserer{' '}
            <a href="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline">Datenschutzerklaerung</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
