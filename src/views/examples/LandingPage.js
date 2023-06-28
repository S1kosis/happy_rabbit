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
import DemoFooter from "components/Footers/DemoFooter.js";

// reactstrap components
import {
  Button,
  // Card,
  // CardHeader,
  // CardBody,
  // CardFooter,
  // CardTitle,
  // ListGroupItem,
  // ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js"

export default function LandingPage() {
  const wrapper = React.useRef(null);
  const [transform] = React.useState(
    "translate3d(0," +
      (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
      "px,0)");
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  }, [])
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="header header-1">
          <div className="page-header">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/hrweblogo2.jpg") + ")",
                transform: transform,
              }}
            />
            <div>
            <Container>
              <Row>
                <Col className="ecommerce-page" lg="6" md="7">
                  <h1 className="text-primary">Explore alongside Happy Rabbit into a world of sensation and delight!</h1>
                  <br />
                  <div className="buttons">
                    <Button to="/ecommerce" tag={Link}
                      className="btn-round mr-3 pulse"
                      color="primary"
                      size="lg"
                    >
                      <i className="tim-icons icon-bag-16" />
                    </Button>
                    <p>Shop Now!</p>
                  </div>
                </Col>              
              </Row>
            </Container>
            </div>
            <div>
            <Container>
              <Row>                
                <Col className="ecommerce-page" lg="6" md="7">                
                  <h3 className="text-danger font-weight-bold">This site is intended for adults only!</h3>
                </Col>
              </Row>
          </Container>
          </div>
          </div>          
          <div>
          
          </div>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

