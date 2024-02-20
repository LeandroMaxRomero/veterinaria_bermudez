import { useState } from "react";
import { useModal } from "../hook/useModal";
import Modal from "../Modal/Modal";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import PropTypes from "prop-types";

export const Slider = ({ data }) => {
  // const [slide, setSlide] = useState(0);

  // const nextSlide = () => {
  //   setSlide(slide === data.length - 1 ? 0 : slide + 1);
  // };

  // const prevSlide = () => {
  //   setSlide(slide === 0 ? data.length - 1 : slide - 1);
  // };

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (img) => {
    setModalContent(img);
    openModal();
  };
  const images = data.map((img) => ({
    src: img.url,
    id: img.id,
  }));
  return (
    <>
      <Modal
        className=" animate__animated animate__fadeIn"
        isOpen={isOpenModal}
        closeModal={closeModal}
      >
        <img src={`${modalContent.url}`} alt={`${modalContent.name}`} />
      </Modal>
      <div className="carousel">
        <div className="myslide">
          <Carousel
            images={images}
            hasMediaButton={false}
            hasIndexBoard={false}
            hasSizeButton={false}
          />
        </div>
        {data.map((item) => {
          return (
            <img
              src={item.url}
              alt={item.name}
              key={item.id}
              className="img-mobile"
              onClick={() => showModal(item)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
    </>
  );
};
Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};