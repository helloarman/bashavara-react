import AboutSection from "../Components/AboutSection";
import { Contact } from "../Components/Contact";
import Header from "../Components/Header";
import Master from "../Layouts/Master";

function About() {
  return (
    <div>
      <Master>
        <Header />
        <AboutSection />
        <Contact />
      </Master>
    </div>
  );
}

export default About;
