import { Fragment } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
//import Campaigns from "../components/Campaigns/Campaigns"
import CampaignSingle from "../components/CamapaignSingle/CampaignSingle";

function ShopPage() {
  return (
    <Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </Fragment>
  );
}

export default ShopPage;
