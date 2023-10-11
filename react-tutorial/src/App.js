import NavBar from "./components/NavBar.js";
import SectionOne from "./components/SectionOne.js";
import SectionTwo from "./components/SectionTwo.js";
import SectionThree from "./components/SectionThree.js";
import SectionFour from "./components/SectionFour.js";
import SectionFive from "./components/SectionFive.js";
import SectionSix from "./components/SectionSix.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <SectionOne></SectionOne>
     <SectionTwo></SectionTwo>
     <SectionThree></SectionThree>
     <SectionFour></SectionFour>
     <SectionFive></SectionFive>
     <SectionSix></SectionSix>
     <Footer></Footer>
    </div>
  );
}

export default App;
