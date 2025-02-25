import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

const App = () => {

    return (
      <>
     
 <div className="  h-screen flex flex-col  bg-gradient-to-b from-blue-900 to-black">
       <Navbar />
  <Hero/>
  
       
      </div>
    
      </>
    );
  }
  
    
 


export default App;
