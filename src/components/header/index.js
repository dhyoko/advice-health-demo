import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import adviceHealthLogo from "../../assets/logo_advice_150.png";
import user_portrait_mock from "../../assets/john_doe_mock.jfif";
import { HEADER_BREAKPOINT } from "../utils";
import { USER_NAME } from "../../mocks/user";
import { NavWrapper, ImageWrapper } from "./style";

const Header = () => {
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
            aria-controls={`offcanvasNavbar-expand-${HEADER_BREAKPOINT}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${HEADER_BREAKPOINT}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${HEADER_BREAKPOINT}`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav>
                <Nav.Link href="#">Dashboard</Nav.Link>
                <Nav.Link href="#">Agendamentos</Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Navbar.Text>
                  {USER_NAME}{" "}
                  <ImageWrapper
                    className="rounded-circle"
                    src={user_portrait_mock}
                  />
                </Navbar.Text>

                <Nav.Link href="#">Sair</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavWrapper>
  );
};

export default Header;
