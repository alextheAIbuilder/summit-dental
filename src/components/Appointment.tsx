"use client";

import { useState } from "react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="appointment" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="section-title">Book an Appointment</h2>
            <p className="section-subtitle">
              Ready to take the next step? Fill out the form below and our team
              will confirm your appointment within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 rounded-2xl bg-accent-50 p-12 text-center">
              <div className="text-5xl">✅</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Request Received!
              </h3>
              <p className="mt-2 text-gray-600">
                We&apos;ll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-12 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Date *
                  </label>
                  <input
                    required
                    type="date"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <select className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                    <option>General Check-up</option>
                    <option>Teeth Cleaning</option>
                    <option>Cosmetic Consultation</option>
                    <option>Orthodontics</option>
                    <option>Dental Implants</option>
                    <option>Emergency Care</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Any concerns or special requirements..."
                />
              </div>
              <button type="submit" className="btn-primary mt-6 w-full">
                Request Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
