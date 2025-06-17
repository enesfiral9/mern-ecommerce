//import Reviews from "../Reviews/Reviews";
import Breadcrumb from "./Breadcrumb/breadcrumb";
import Gallery from "./Gallery/Gallery";
import "./ProductDetails.css";
import Info from "./Info/Info";
import Tabs from "./Tabs/Tabs";
const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>
          <Tabs />
          
          
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
