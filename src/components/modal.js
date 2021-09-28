function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
return(
    <div className="modal">
        <div className="modalHeader">
            <span className="modalClose" onClick={cancelHandler}>X</span>
            <p className="modalCloseText">Are you Sure? this will delete {props.text}</p>
        </div>
        <div className="modalBody">
            <div className="confirmDelete">
            <button onClick={confirmHandler}>Confrim</button>
            </div>
            <div className="cancelDelete">
            <button onClick={cancelHandler}>Cancel</button>
            </div>
        </div>
    </div>
);
}

export default Modal;