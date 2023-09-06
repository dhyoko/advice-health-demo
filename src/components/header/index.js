import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { get } from "lodash";
import adviceHealthLogo from "../../assets/logo_advice_150.png";
import { HEADER_BREAKPOINT } from "../utils";
import { user } from "../../mocks/user";
import { NavWrapper, OffcanvasWrapper, ImageWrapper } from "./style";
import { PATHS } from "../../utils/paths";

const UserSection = (props) => {
  const { userName, portrait, show } = props;

  if (!show) {
    return null;
  }

  return (
    <Navbar.Text>
      {userName}
      <ImageWrapper className="rounded-circle" src={portrait} />
    </Navbar.Text>
  );
};

const Header = () => {
  const [showOffcanvasMenu, setShowOffcanvasMenu] = useState(false);
  const toggleMenu = () => setShowOffcanvasMenu((prev) => !prev);
  const userName = get(user, "name", "");
  const portrait = get(user, "portrait", "");

  return (
    <NavWrapper>
      <Navbar
        key={HEADER_BREAKPOINT}
        expand={HEADER_BREAKPOINT}
        className="mb-3"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={adviceHealthLogo} alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={toggleMenu}
            // aria-controls={`offcanvasNavbar-expand-${HEADER_BREAKPOINT}`}
          />
          <Navbar.Offcanvas
            // id={`offcanvasNavbar-expand-${HEADER_BREAKPOINT}`}
            // aria-labelledby={`offcanvasNavbarLabel-expand-${HEADER_BREAKPOINT}`}
            placement="end"
            show={showOffcanvasMenu}
            onHide={toggleMenu}
          >
            <OffcanvasWrapper>
              <Offcanvas.Header closeButton>
                <UserSection
                  userName={userName}
                  portrait={portrait}
                  show={true}
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Item>
                    <Link to={PATHS.DASHBOARD}>Dashboard</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to={PATHS.SCHEDULING}>Agendamentos</Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to={PATHS.APPOINTMENTS}>Consultas</Link>
                  </Nav.Item>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <UserSection
                    userName={userName}
                    portrait={portrait}
                    show={!showOffcanvasMenu}
                  />
                  <Nav.Link href="#">Sair</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </OffcanvasWrapper>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavWrapper>
  );
};

export default Header;
