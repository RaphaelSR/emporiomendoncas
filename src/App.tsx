import React from "react";
import "../tailwind.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import CortesDeCarne from "./components/CortesDeCarne";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Showcase />
        <CortesDeCarne />
        <Info />
      </main>
      <Footer />
    </div>
  );
}

export default App;
