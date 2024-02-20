import { IoMdCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";


const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          <IoMdCloseCircleOutline style={{ width: "100%", height: "100%" }} />
        </button>
        {children}
      </div>
    </article>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;