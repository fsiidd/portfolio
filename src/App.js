import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Wrapper from "./Components/Wrapper";
import Experiences from "./Components/Experiences";

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <About />
        <Experiences />
        <Experiences />
      </Wrapper>
    </div>
  );
}

export default App;
