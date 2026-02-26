export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-900 text-gray-400">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-sm text-white">🦷</span>
              </div>
              <span className="text-lg font-bold text-white">
                Summit <span className="text-primary-400">Dental</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Providing exceptional dental care to the Denver community since
              2009. Your smile is our passion.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Services", "Our Team", "Patient Info", "Insurance", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                    className="transition-colors hover:text-primary-400"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>1250 Summit Avenue, Suite 200</li>
              <li>Denver, CO 80202</li>
              <li>(303) 555-0192</li>
              <li>info@summitdentalcare.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Summit Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
