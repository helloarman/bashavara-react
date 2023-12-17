import About from "../Components/About";
import Category from "../Components/Category";
import { Contact } from "../Components/Contact";
import Header from "../Components/Header";
import { PropertyListing } from "../Components/PropertyListing";
import Master from "../Layouts/Master";

function Home() {
  return (
    <div>
      <Master>
        <Header />
        <Category />
        <About />
        <PropertyListing />
        <Contact />
      </Master>
    </div>
  );
}

export default Home;
