import React from "react";
import Navbar from "./components/Navbar"
import Banner from  "./components/Banner";


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar cartCount={0} /> 
      <Banner />
    </div>
    </>
  )
}

export default App;