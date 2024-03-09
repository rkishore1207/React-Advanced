
interface ClearModalProps{
    onClear:(value:boolean) => void;
}

const ClearModal = ({onClear}:ClearModalProps) => {

    return (
        <div className="modal-overlay">
            <div className="modal-box modal-content">
                <p>Are you Sure?</p>
                <div>
                    <button onClick={()=>onClear(true)}>Ok</button>
                    <button onClick={()=>onClear(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ClearModal;