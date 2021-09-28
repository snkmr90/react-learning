function Backdrop(props){
    return(
        <div className="modalBackdrop" onClick={props.onCancel} > </div>
    );
}
export default Backdrop;