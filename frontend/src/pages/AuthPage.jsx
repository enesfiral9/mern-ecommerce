import React from "react";
import Auth from "../components/Auth/Auth";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

function AuthPage() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Footer />
    </React.Fragment>
  );
}

export default AuthPage;
