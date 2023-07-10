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
      <Nav_bar />
      <main className="main">
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
