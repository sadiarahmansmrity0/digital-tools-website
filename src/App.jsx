import React from "react";
import Navbar from "./components/Navbar"
import Banner from  "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar cartCount={0} /> 
      <Banner />
      <Stats />
      <Steps />
      <Pricing/>
    </div>
    </>
  )
}

export default App;