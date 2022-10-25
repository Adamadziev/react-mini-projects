import React from "react";
import "./index.scss";

const Modal = ({ openModal, setOpenModal, children }) => {
  return (
    <div className={`overlay animated ${openModal ? "show" : null}`}>
      <div className="modal">
        <svg
          onClick={() => setOpenModal(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={onClickOpenModal}>
        ✨ Открыть окно
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h2>This is modal window</h2>
        <img src="https://media.giphy.com/media/VFZOMuKI87PZ4VI1Qu/giphy.gif" />
      </Modal>
    </div>
  );
};

export default App;
