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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export default function LoginPage() {
  const [emailFocus, setEmailFocus] = React.useState(undefined);
  const [passwordFocus, setPasswordFocus] = React.useState(undefined);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="page-header">
      <img className="squares square1"
              alt=""
              src={require("assets/img/hrsquare1.png")}
            />
        <img className="squares square2"
              alt=""
              src={require("assets/img/hrsquare2.png")}
            />
        <img className="squares square3" 
              alt=""
              src={require("assets/img/hrsquare3.png")}
            />
        <img className="squares square4"         
              alt=""
              src={require("assets/img/hrsquare4.png")}
            />
        <img className="squares square5"
              alt=""
              src={require("assets/img/hrsquare5.png")}
            />
        <img className="squares square6"
              alt=""
              src={require("assets/img/hrsquare5.png")}
            />
        <div className="page-header-image" />
        <Container>
          <Col className="mx-auto" lg="5" md="8">
            <Card className="card-login">
              <Form action="" className="form" method="">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-white-1.png")}
                  />
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={classnames("input-lg", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02"/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames("input-lg", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    block
                    className="btn-round"
                    color="primary"                    
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                    to="/ecommerce" tag={Link}>                    
                    Down the Rabbit hole we go!
                  </Button>
                </CardFooter>                
              </Form>
            </Card>
          </Col>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}








