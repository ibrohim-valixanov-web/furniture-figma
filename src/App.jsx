import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Main/Shop";
import Card from "./components/Shop/Card2/Card";
import High from "./components/Shop/High3/High";
import General from "./components/Comparison/General/General";
import Comparison from "./components/Comparison/Comparison/Comparison";
import Warranty from "./components/Comparison/Warranty/Warranty";
import HomeContact from "./components/Contact/HomeConatct/HomeContact";
import Yourname from "./components/Contact/Yourname/Yourname";
import Crafted from "./components/Contact/Crafted/Crafted";
import Homeblog from "./components/Blog/Homeblog/Homeblog";
import Categories from "./components/Blog/Categories/Categories";
import Support from "./components/Blog/Support/Support";

const App = () => {
  return (
    <div>
      <Header />

      <Shop />
      <Card />
      <High />
      <Footer />

      <Comparison />
      <General />
      <Warranty />

      <HomeContact/>   
      <Yourname/>
      <Crafted/>

      <Homeblog/>
      <Categories/>
      <Support/>
    </div>
  );
};

export default App;
