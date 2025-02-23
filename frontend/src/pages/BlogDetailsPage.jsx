import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
//import ProductDetails from "../components/BlogDetails/BlogDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Footer from "../components/Layout/Footer/Footer";


function BlogDetailsPage() {
  return (
    <Fragment>
      <Header />
      <BlogDetails />
      <Footer />
    </Fragment>
  );
}

export default BlogDetailsPage;
