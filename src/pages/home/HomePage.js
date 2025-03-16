import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Jumbo from "../../components/jumbotron/Jumbo"
import Testimonials from "../../components/testimonials/Testimonials"
import Specials from "../../components/specials/Specials";
import About from "../../components/about/About";

function HomePage() {
    return (
      <>
        <Header/>
        <Jumbo/>
        <Specials/>
        <Testimonials/>
        <About/>
        <Footer/>
      </>
    );
  }
  
export default HomePage;
  