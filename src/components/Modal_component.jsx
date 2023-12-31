import PropTypes from "prop-types";

const Modal_component = ({ select, change, closeM, asing, update }) => {
  const click = (number) => {
    const valid = number;
    update(valid);
  };

  return (
    <div className="container-modal">
      <div className="container-modal-1">
        <div className="icon-close">
          <h2>Back this project</h2>
          <button className="button-close" onClick={closeM}>
            <img src="./icon-close-modal.svg" alt="close"></img>
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Rise out in
          the world?
        </p>
        <form className="form-modal">
          <div className="selected selected-pledge">
            <input
              checked={select[0].status}
              onChange={change}
              name="modal"
              type="radio"
              id="pledge"
            ></input>
            <label htmlFor="pledge">Pledge whith no reward</label>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          <div className={`selected ${select[1].status ? "selected-1" : " "}`}>
            <input
              checked={select[1].status}
              onChange={change}
              name="modal"
              type="radio"
              id="bamboo"
            ></input>
            <label htmlFor="bamboo">Bamboo stand</label>
            <span>Pledge $25 or more</span>
            <div className="selected-number">
              101
              <span>left</span>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you’ll be added to
              a special Backer member list.
            </p>
          </div>
          {select[1].status ? (
            <div className="select-modal">
              <p>Enter your pledge</p>
              <div className="container-continue">
                <input type="number" min={25} onKeyUp={(e) => asing(e)}></input>
                <button
                  onClick={() => {
                    click(1);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}
          <div className={`selected ${select[2].status ? "selected-1" : " "}`}>
            <input
              checked={select[2].status}
              onChange={change}
              name="modal"
              type="radio"
              id="blackE"
            ></input>
            <label htmlFor="blackE">Black Edition Stand</label>
            <span>Pledge $75 or more</span>
            <div className="selected-number">
              64
              <span>left</span>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
          </div>
          {select[2].status ? (
            <div className="select-modal">
              <p>Enter your pledge</p>
              <div className="container-continue">
                <input type="number" min={75} onKeyUp={(e) => asing(e)}></input>
                <button
                  onClick={() => {
                    click(2);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}
          <div className="selected selected-2">
            <input
              checked={select[3].status}
              onChange={change}
              name="modal"
              type="radio"
              id="mahogany"
              disabled
            ></input>
            <label htmlFor="mahogany">Mahogany Special Edition</label>
            <span>Pledge $200 or more</span>
            <div className="selected-number">
              0<span>left</span>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal_component.propTypes = {
  select: PropTypes.array,
  change: PropTypes.func,
  closeM: PropTypes.func,
  asing: PropTypes.func,
  update: PropTypes.func,
};

export default Modal_component;
