import MainSection from "./Components/MainSection"
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection"
import ZigZagSection from "./Components/ZigZagSection"
// import FifthSection from "./Components/FifthSection"
import Footer from "./Components/Footer"
import LastSection from "./Components/LastSection"
import { useState, useEffect } from "react";  // Added useEffect import here

function App() {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleWidth);

    // Call handleWidth initially to set the initial state
    handleWidth();

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  return (
    <div className="">
      {!width && (
        <div>
          <MainSection />
          <SecondSection />
          <ThirdSection />
          <ZigZagSection />
          <FourthSection />
          <LastSection />
          <Footer />
        </div>
      )}

      {width && (
        <div className="bg-green-950  h-screen w-full flex flex-col justify-center items-center">
          <div><img className="w-24" src="../img/NobleStitch-removebg-preview.png" alt="" />
          </div>
        <div className=" p-9 text-center font-bold h-18 w-full bg-green-950 ">
          <p className="text-peela font-custom">Please open link in Laptop or PC for better experience</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;