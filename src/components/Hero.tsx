export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16">
      <div className="section-padding container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold text-primary-700">
              ✨ Now Accepting New Patients
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              At Summit Dental Care, we combine advanced technology with
              compassionate care to give you the healthy, beautiful smile you
              deserve. From routine check-ups to complete smile makeovers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#appointment" className="btn-primary">
                Book Appointment
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                5,000+ Happy Patients
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[480px] w-[480px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 opacity-30 blur-3xl" />
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary-100 to-white shadow-xl">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="text-7xl">🦷</div>
                  <p className="mt-4 text-2xl font-bold text-primary-800">Summit Dental</p>
                  <p className="mt-1 text-sm text-gray-500">Care You Can Trust</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-2xl font-bold text-primary-600">4.9★</p>
                      <p className="text-xs text-gray-500">Google Rating</p>
                    </div>
                    <div className="rounded-xl bg-white p-3 shadow-sm">
                      <p className="text-2xl font-bold text-primary-600">15+</p>
                      <p className="text-xs text-gray-500">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
