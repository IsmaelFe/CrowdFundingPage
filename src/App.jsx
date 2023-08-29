import { useState, useEffect } from "react";
import Accumulated_project from "./components/Accumulated_project";
import Back_project from "./components/Back_project";
import Card from "./components/Card";
import Modal_component from "./components/Modal_component";
import Nav_bar from "./components/Nav_bar";
import Modal_completed from "./components/Modal_completed";
import { container, dataAccumulated } from "./data/data";
import Menu_mobile from "./components/Menu_mobile";

const imgDesktop = "./public/images/image-hero-desktop.jpg";
const imgMobile = "./public/images/image-hero-mobile.jpg";

let mont = 0;
let accept = false;

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

  const [accumulated, setAccumulated] = useState(dataAccumulated);
  const [selectdModal, setSelectdModal] = useState(statusModal);
  const [openCloseM, setOpenCloseM] = useState(false);
  const [closeComplet, setCloseComplet] = useState(false);
  const [markBook, setMarckBook] = useState(false);
  const [menuH, setMenuH] = useState(false);
  const [image, setImage] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setImage(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMenu = () => {
    setMenuH(!menuH);
  };

  const completedModal = () => {
    let newModal = [...selectdModal];
    for (let i = 0; i < newModal.length; i++) {
      newModal[i].status = false;
    }
    setSelectdModal(newModal);
    accept = false;
  };

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
    completedModal();
  };

  const asignValue = (e) => {
    let min = e.target.min;
    let value = e.target.value;
    if (value >= min) {
      mont = parseInt(value);
      accept = true;
    }
  };

  const backersUpdate = (number) => {
    if (number === 1 && mont >= 25) {
      if (accept) {
        const newState = {
          ...accumulated,
        };
        setAccumulated({
          ...newState,
          accumulated: newState.accumulated + mont,
          backers: newState.backers + 1,
        });

        setOpenCloseM(!openCloseM);
        setCloseComplet(!closeComplet);
      }
    } else if (number === 2 && mont >= 75) {
      if (accept) {
        const newState = {
          ...accumulated,
        };
        setAccumulated({
          ...newState,
          accumulated: newState.accumulated + mont,
          backers: newState.backers + 1,
        });

        setOpenCloseM(!openCloseM);
        setCloseComplet(!closeComplet);
      }
    }
  };

  return (
    <div className="container-main">
      {openCloseM ? (
        <Modal_component
          select={selectdModal}
          change={changeModal}
          closeM={closeModal}
          open={closeCompleted}
          asing={asignValue}
          update={backersUpdate}
        />
      ) : null}
      {menuH ? <Menu_mobile /> : null}
      {closeComplet ? <Modal_completed close={gotIt} /> : null}
      <div className="img-container">
        <img
          src={image > 700 ? imgDesktop : imgMobile}
          alt="img"
          className="img-desktop"
        ></img>
      </div>
      <Nav_bar rezise={image} open={menuH} openM={openMenu} />
      <main className="main">
        <Back_project change={changeBook} changeM={markBook} rezise={image} />
        <Accumulated_project accumulate={accumulated} />
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
