import "./App.css";
import Accumulated_project from "./components/Accumulated_project";
import Back_project from "./components/Back_project";
import Card from "./components/Card";
import Nav_bar from "./components/Nav_bar";

function App() {
  return (
    <div className="container-main">
      <div className="img-container">
        <img
          src="../public/images/image-hero-desktop.jpg"
          alt="img"
          className="img-desktop"
        ></img>
      </div>
      <nav className="nav-bar">
        <img src="../public/images/logo.svg"></img>
        <div>
          <ul>
            <li>About</li>
            <li>Descover</li>
            <li>Get Started</li>
          </ul>
        </div>
      </nav>
      <Nav_bar />
      <main>
        <Back_project />
        <Accumulated_project />
        <div>
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
