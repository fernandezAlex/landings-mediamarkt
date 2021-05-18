import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Modal = ({
  isShowing,
  hide,
  data }) =>

  isShowing ? ReactDOM.createPortal(
    <React.Fragment>

      <div className="mm__modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="mm__modal">
          <div className="mm__modal-iframe">
            <div className="modal__content">
              <button type="button" className="mm__modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <FontAwesomeIcon icon={faTimes} className="icon__modal" size="xs" />
              </button>
              <div className="margin_button">
              </div>

              <div>
                <p>
                <p dangerouslySetInnerHTML={{ __html: data.contentModal }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>, document.body
  ) : null;

  console.log(<Modal />)


export default Modal;

