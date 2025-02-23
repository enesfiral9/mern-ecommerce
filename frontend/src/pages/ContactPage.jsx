import React from 'react'
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Contact from "../components/Contact/Contact";

function ContactPage() {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage