import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;