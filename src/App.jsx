import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Introduction from "./sections/Introduction";
import Activities from "./sections/Activities";
import Intervention from "./sections/Intervention";
import Implementation from "./sections/Implementation";
import Evaluation from "./sections/Evaluation";
import Reflection from "./sections/Reflection";
import Conclusion from "./sections/Conclusion";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = {
    intro: { label: "Introduction", component: Introduction },
    activities: { label: "Activities", component: Activities },
    intervention: { label: "Intervention", component: Intervention },
    implementation: { label: "Implementation", component: Implementation },
    eval: { label: "Evaluation", component: Evaluation },
    reflection: { label: "Reflection", component: Reflection },
    conclusion: { label: "Conclusion", component: Conclusion },
  };

  const ActiveComponent = sections[activeSection].component;

  return (
    <div className="min-h-screen bg-green-50">
      <Hero />
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sections={sections}
      />

      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-3xl mx-auto px-4 py-8"
      >
        <ActiveComponent />
      </motion.div>

      <Footer />
    </div>
  );
}
