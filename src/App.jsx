import { useState } from "react";
import "./App.css";
import Accumulated_project from "./components/Accumulated_project";
import Back_project from "./components/Back_project";
import Card from "./components/Card";
import Modal_component from "./components/Modal_component";
import Nav_bar from "./components/Nav_bar";
import container from "./data/data";
import Modal_completed from "./components/Modal_completed";

function App() {
  const statusModal = [
    {
      id: "pledge",
      status: false,
    },
    {
      id: "bamboo",
      status: false,
      value: 25,
    },
    {
      id: "blackE",
      status: false,
      value: 75,
    },
    {
      id: "mahogany",
      status: false,
    },
  ];

  const [selectdModal, setSelectdModal] = useState(statusModal);
  const [openCloseM, setOpenCloseM] = useState(false);
  const [closeComplet, setCloseComplet] = useState(false);
  const [markBook, setMarckBook] = useState(false);

  const changeBook = () => {
    setMarckBook(!markBook);
  };

  const changeModal = (e) => {
    let newModal = [...selectdModal];
    for (let i = 0; i < newModal.length; i++) {
      newModal[i].status = false;
      if (newModal[i].id === e.target.id) {
        newModal[i].status = true;
      }
    }
    setSelectdModal(newModal);
  };

  const closeModal = () => {
    setOpenCloseM(!openCloseM);
  };

  const closeCompleted = () => {
    setOpenCloseM(!openCloseM);
    setCloseComplet(!closeComplet);
  };

  const gotIt = () => {
    setCloseComplet(!closeCompleted);
  };

  return (
    <div className="container-main">
      {openCloseM ? (
        <Modal_component
          select={selectdModal}
          change={changeModal}
          closeM={closeModal}
          open={closeCompleted}
        />
      ) : null}
      {closeComplet ? <Modal_completed close={gotIt} /> : null}
      <div className="img-container">
        <img
          src="../public/images/image-hero-desktop.jpg"
          alt="img"
          className="img-desktop"
        ></img>
      </div>
      <Nav_bar />
      <main className="main">
        <Back_project change={changeBook} changeM={markBook} />
        <Accumulated_project />
        <div className="container-card">
          <h2> About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          {container.map((content, i) => (
            <Card content={content} key={i} openM={closeModal} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
