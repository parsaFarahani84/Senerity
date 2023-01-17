import "./App.css";
import AboutUs from "./components/aboutus/AboutUs";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import TeamMembers from "./components/teamMembers/TeamMembers";
import Teastimonails from "./components/testimonials/Teastimonails";
import OurServices from "./components/ourservices/Ourservices";
import PhotoGallery from "./components/photogallery/PhotoGallery";
import TrustedBrands from "./components/trustedbrands/TrustedBrands";
import LatestNews from "./components/latestnews/LatestNews";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <AboutUs />
      <TeamMembers />
      <Teastimonails />
      <OurServices />
      <PhotoGallery />
      <TrustedBrands />
      <LatestNews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
