import React from "react";
import { CircularProgress } from "@mui/material";
import "../Modal/modal.css";
const ModalPending = ({ create, close }) => {

    return (
        <div className="modal__wrapper">
            <div className="single__modal" style={{ height: "25%", textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className="modal-pending" style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
                    {create === 0 ? (<>
                        <CircularProgress />
                        <p style={{ marginLeft: 30 }}>Processing...</p></>) : (create === 1 ? (<p>Success</p>) : <p>Something went wrong</p>)}
                </div>
                {create !== 0 && <button className="place__bid-btn" onClick={close}>Close</button>}
            </div>
        </div>
    );
};

export default ModalPending;
