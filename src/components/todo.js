import Modal from "./modal";
import Backdrop from "./backdrop";
import { useState } from "react";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="container">
      <div className="card">
        <div>{props.text}</div>
        <div className="action">
          <button onClick={deleteHandler} type="button">
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          text={props.text}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
