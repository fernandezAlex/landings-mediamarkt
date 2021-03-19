import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="mm__modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="mm__modal">
        <div className="mm__modal-iframe">
          <button type="button" className="mm__modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <FontAwesomeIcon icon={faTimes} className="icon__modal" size="xs" />
          </button>
          <div className="margin_button">
          </div>
          <iframe id="iframeHome" title="MediaMarkt Business" width="560" height="315" src="https://www.youtube.com/embed/hw04EYvCZz0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;


