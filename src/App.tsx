import CarouselAntd from "./component/Carousel";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import "./_dist/app.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <CarouselAntd />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
