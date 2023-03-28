import "./footer.css";
import ModalDonate from "../ModalDonate/ModalDonate";
import { useDispatch, useSelector } from "react-redux";
import modaleActions from "../../Store/Modal/actions.js";
import { Link as Anchor } from "react-router-dom";

const { openModal, closeModal } = modaleActions;
export default function Footer() {
  const modalName = "modalDonate";
  const dispatch = useDispatch();
  const render = useSelector((store) => store.modal.render);

  const handleOpenModal = () => {
    dispatch(openModal({ modalName }));
  };
  function handleCloseModal() {
    dispatch(closeModal());
  }

  return (
    <>
      <div className="container-footer">
        <span className="background-cont"></span>
        <div className="container-suscribe">
          <h3>Suscribe</h3>
          <span className="suscribe-email">
            <input type="email" />
            <button className="button-suscribe">Suscribe now</button>
          </span>
        </div>
      </div>
      <div className="footer-menu">
        <div className="container-info">
          <span>
            <Anchor to="/">Home</Anchor>
            <Anchor to="/mangas">Mangas</Anchor>
          </span>
          <img src="./logo.png" alt="" />
          <div className="social-media">
            <span className="icons-media">
              <img src="./facebook.png" alt="" />
              <img src="./twitter.png" alt="" />
              <img src="./vimeo.png" alt="" />
              <img src="./youtube.png" alt="" />
            </span>
            <button className="button-suscribe" onClick={handleOpenModal}>
              Donate ♡
            </button>
            <ModalDonate render={render} onCloseModal={handleCloseModal} />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
