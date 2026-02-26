export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Have questions? We&apos;re here to help. Reach out to us through any
            of the channels below.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 p-8 text-center transition-all hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Visit Us</h3>
            <p className="mt-2 text-sm text-gray-500">
              1250 Summit Avenue, Suite 200
              <br />
              Denver, CO 80202
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 text-center transition-all hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Call Us</h3>
            <p className="mt-2 text-sm text-gray-500">
              (303) 555-0192
              <br />
              Mon–Fri: 8am – 6pm
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 text-center transition-all hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
              <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Email Us</h3>
            <p className="mt-2 text-sm text-gray-500">
              info@summitdentalcare.com
              <br />
              We respond within 24 hours
            </p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
          <div className="flex h-64 items-center justify-center text-gray-400">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              <p className="mt-2 text-sm">1250 Summit Avenue, Denver, CO 80202</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 rounded-2xl bg-primary-50 p-8">
          <h3 className="text-center text-lg font-semibold text-gray-900">
            Office Hours
          </h3>
          <div className="mx-auto mt-6 grid max-w-md gap-2 text-sm">
            {[
              ["Monday – Thursday", "8:00 AM – 6:00 PM"],
              ["Friday", "8:00 AM – 4:00 PM"],
              ["Saturday", "9:00 AM – 2:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between rounded-lg px-4 py-2 odd:bg-white">
                <span className="font-medium text-gray-700">{day}</span>
                <span className="text-gray-500">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
