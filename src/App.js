import React from "react";
import LandingSection from "./components/LandingSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection"; // Asegúrate de tener este import
import Header from "./components/Header";
import Footer from "./components/Footer";
import JourneySection from "./components/JourneySection";

function App() {
  return (
    <main>
      <Header />
      <LandingSection />
      <JourneySection />
      <TechStackSection /> 
      <ProjectsSection />
      <ContactMeSection /> {/* ¡Aquí estaba el formulario escondido! */}
      <Footer />
    </main>
  );
}

export default App;