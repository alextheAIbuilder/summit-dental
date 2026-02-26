const services = [
  {
    icon: "🪥",
    title: "General Dentistry",
    desc: "Comprehensive exams, cleanings, fillings, and preventive care to maintain your oral health.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, bonding, and smile makeovers for a stunning, confident smile.",
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    desc: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
  },
  {
    icon: "😁",
    title: "Orthodontics",
    desc: "Traditional braces and clear aligners like Invisalign to straighten your smile discreetly.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    desc: "Gentle, kid-friendly dental care creating positive experiences for your little ones.",
  },
  {
    icon: "🚨",
    title: "Emergency Care",
    desc: "Same-day appointments for dental emergencies — toothaches, broken teeth, and urgent issues.",
  },
  {
    icon: "💎",
    title: "Crowns & Bridges",
    desc: "Custom-crafted restorations to repair damaged teeth and replace missing ones seamlessly.",
  },
  {
    icon: "😴",
    title: "Sedation Dentistry",
    desc: "Comfortable, anxiety-free treatment options for patients who feel nervous about dental visits.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            From routine care to advanced procedures, we offer a full range of
            dental services under one roof.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-colors group-hover:bg-primary-100">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
