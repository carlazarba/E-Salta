import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import SimuladorPermisionario from "@/components/SimuladorPermisionario";
import SimuladorConductor from "@/components/SimuladorConductor";
import FlujoPago from "@/components/FlujoPago";
import Beneficios from "@/components/Beneficios";
import Permisionarios from "@/components/Permisionarios";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <SimuladorPermisionario />
      <SimuladorConductor />
      <FlujoPago />
      <Beneficios />
      <Permisionarios />
      <Footer />
    </main>
  );
}