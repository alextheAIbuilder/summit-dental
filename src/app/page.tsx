import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import PatientInfo from "@/components/PatientInfo";
import Insurance from "@/components/Insurance";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <PatientInfo />
      <Insurance />
      <Appointment />
      <Contact />
    </>
  );
}
