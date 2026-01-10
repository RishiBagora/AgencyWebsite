import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactHero from "../components/contact/ContactHero";
import ContactIntro from "../components/contact/ContactIntro";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";
import TrustSignals from "../components/contact/TrustSignals";
import ContactCTA from "../components/contact/ContactCTA";
import useSEO from "../hooks/useSEO";
const Contact = () => {
  const location = useLocation();

  useSEO({
    title: "Contact Us | Get in Touch with TheWebKulture – India's Trusted Web Development Agency",
    description: "Reach out to TheWebKulture for expert web development services in India. Contact us today to discuss your project and discover how we can help your business thrive online.",
    canonical: "https://thewebkulture.vercel.app/contact"
  });
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
    <div className="mt-15">
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <section id="contact-form">
        <ContactForm />
      </section>
      <TrustSignals />
      <ContactCTA />
    </div>
      
    </>
  );
};

export default Contact;
