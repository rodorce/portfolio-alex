import Hero from "./components/Hero";
import InvitationDate from "./components/InvitationDate";
import "animate.css";
import "aos/dist/aos.css";
import Aos from "aos";
import portfolio from "./Portfolio.json";
import AboutUs from "./components/AboutUs";
function App() {
  Aos.init();
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <InvitationDate portfolio={portfolio} />
    </div>
  );
}

export default App;
