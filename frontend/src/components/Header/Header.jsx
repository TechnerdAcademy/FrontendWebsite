import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import LoginModal from "./LoginModal"; 
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Login",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Technerds.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a
                      href={item.url}
                      onClick={item.display === "Login" ? toggleModal : null}
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 9693329842
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
      <LoginModal isOpen={modalOpen} toggle={toggleModal} />
    </header>
  );
};

export default Header;
