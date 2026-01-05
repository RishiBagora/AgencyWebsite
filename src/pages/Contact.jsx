import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactHero from "../components/contact/ContactHero";
import ContactIntro from "../components/contact/ContactIntro";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";
import TrustSignals from "../components/contact/TrustSignals";
import ContactCTA from "../components/contact/ContactCTA";
const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const formSection = document.getElementById("contact-form");
      if (formSection) {
        formSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <section id="contact-form">
        <ContactForm />
      </section>
      <TrustSignals />
      <ContactCTA />
    </>
  );
};

export default Contact;
