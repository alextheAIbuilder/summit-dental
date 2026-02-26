const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    bio: "DDS from Columbia University. 15+ years specializing in cosmetic and restorative dentistry.",
    color: "from-primary-400 to-primary-600",
  },
  {
    name: "Dr. James Park",
    role: "Orthodontist",
    bio: "Board-certified orthodontist with expertise in Invisalign and traditional braces.",
    color: "from-accent-400 to-accent-600",
  },
  {
    name: "Dr. Emily Chen",
    role: "Pediatric Dentist",
    bio: "Specialized in children's dentistry, making every young patient feel safe and comfortable.",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Dr. Michael Torres",
    role: "Oral Surgeon",
    bio: "Expert in dental implants, extractions, and advanced surgical procedures.",
    color: "from-indigo-400 to-indigo-600",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Our experienced team of dental professionals is dedicated to
            providing you with the highest quality care.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${t.color}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl text-white backdrop-blur-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm font-medium text-primary-600">{t.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
