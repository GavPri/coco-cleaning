import ContactForm from "../../components/contact-form";
import React from "react";

const page = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-sans text-foreground text-left pl-6 italic">Contact Us</h2>
      <ContactForm />
    </section>
  );
};

export default page;
