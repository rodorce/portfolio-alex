import Announcement from "./components/Announcement";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import InvitationDate from "./components/InvitationDate";
import InvMessage from "./components/InvMessage";
import Quote from "./components/Quote";
import "animate.css";
import "aos/dist/aos.css";
import Aos from "aos";
import OurTradition from "./components/OurTradition";
import portfolio from "./Portfolio.json";
function App() {
  Aos.init();
  return (
    <div className="App">
      <Hero />
      <InvitationDate portfolio={portfolio} />
    </div>
  );
}

export default App;
