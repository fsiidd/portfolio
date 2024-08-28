import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <About />
      </Wrapper>
    </div>
  );
}

export default App;
