const providers = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "Guardian",
  "United Healthcare",
  "Blue Cross Blue Shield",
  "Humana",
];

export default function Insurance() {
  return (
    <section id="insurance" className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Insurance & Financing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-200">
              We believe cost should never be a barrier to great dental care. We
              accept most major insurance plans and offer flexible payment options.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Insurance Verification</h4>
                  <p className="text-sm text-primary-200">
                    We verify your benefits before your visit so you know exactly
                    what&apos;s covered.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Maximize Your Benefits</h4>
                  <p className="text-sm text-primary-200">
                    Our team helps you make the most of your dental insurance coverage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">No Insurance? No Problem</h4>
                  <p className="text-sm text-primary-200">
                    Ask about our in-house membership plan with discounted rates on all services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Accepted Insurance Providers</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {providers.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium"
                >
                  <svg className="h-4 w-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {p}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-primary-200">
              Don&apos;t see your provider? Contact us — we work with many more plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
