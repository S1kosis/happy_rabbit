/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("primary");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/landing-page" tag={Link} id="tooltip6619950104">
            <img
              alt=""
              src={require("assets/img/hrnavbar.png")}
            />
            </NavbarBrand>
            <UncontrolledTooltip delay={0} target="tooltip6619950104">
             SA's newest and most exciting adult store
            </UncontrolledTooltip>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <span>Happy Rabbit</span>
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>              
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i aria-hidden={true} className="tim-icons icon-single-02" />
                  <p>Profile</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="tim-icons icon-lock-circle" />
                    Login
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="tim-icons icon-heart-2" />
                    Register
                  </DropdownItem>                  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i aria-hidden={true} className="tim-icons icon-tag" />
                  <p>The Rabbit Hole</p>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="tim-icons icon-tag" />
                    Showroom
                  </DropdownItem>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="tim-icons icon-pin" />
                    Events
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="tim-icons icon-gift-2" />
                    Special Requests
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="tim-icons icon-link-72" />
                    Partners
                  </DropdownItem>                      
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i
                    aria-hidden={true}
                    className="tim-icons icon-chat-33"
                  />
                  <p>info</p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="tim-icons icon-bulb-63" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="tim-icons icon-chat-33" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="tim-icons icon-money-coins" />
                    Investor Info
                  </DropdownItem>                                    
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem to="/ecommerce" tag={Link}>
                <Button
                  className="nav-link"
                  color="default"                  
                  size="sm"
                  target="_blank"   
                  >               
                  <p>Shop Now</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
