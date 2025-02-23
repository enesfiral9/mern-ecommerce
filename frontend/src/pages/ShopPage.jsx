import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
//import Campaigns from "../components/Campaigns/Campaigns"
import CampaignSingle from "../components/CamapaignSingle/CampaignSingle";

import Footer from "../components/Layout/Footer/Footer";

function ShopPage() {
  return (
    <Fragment>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
   
      <Footer />
    </Fragment>
  );
}

export default ShopPage;
