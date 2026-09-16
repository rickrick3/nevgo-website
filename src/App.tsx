import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Impact from "./components/Impact/Impact";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import InAction from "./components/InAction/InAction";
import Story from "./components/Story/Story";
import Support from "./components/Support/Support";
import Quote from "./components/Quote/Quote";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <WhatWeDo />
        <InAction />
        <Story />
        <Support />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
