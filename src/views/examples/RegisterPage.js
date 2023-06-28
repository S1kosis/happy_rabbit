import React from "react";
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
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,  
  Row,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export default function RegisterPage() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  const [lastNameFocus, setLastNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
  }
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
          <Col className="mx-auto" lg="7" md="8">
          <Card className="card-register">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/square-white-1.png")}
                    />
                    <CardTitle tag="h4">Register</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form className="form">
                      <Row>
                        <Col>                      
                      <InputGroup
                        className={classnames({
                          "input-group-focus": firstNameFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="First Name"
                          type="text"
                          onFocus={(e) => setFirstNameFocus(true)}
                          onBlur={(e) => setFirstNameFocus(false)}
                        />
                      </InputGroup> 
                      <InputGroup
                        className={classnames({
                          "input-group-focus": emailFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Address"
                          type="text"
                          onFocus={(e) => setEmailFocus(true)}
                          onBlur={(e) => setEmailFocus(false)}
                        />
                      </InputGroup>                         
                      <InputGroup
                        className={classnames({
                          "input-group-focus": passwordFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          onFocus={(e) => setPasswordFocus(true)}
                          onBlur={(e) => setPasswordFocus(false)}
                        />
                      </InputGroup>
                      </Col>
                      <Col>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": lastNameFocus,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Surname"
                          type="text"
                          onFocus={(e) => setLastNameFocus(true)}
                          onBlur={(e) => setLastNameFocus(false)}
                        />
                      </InputGroup>                                                         
                      <InputGroup
                        className={classnames({
                          "input-group-focus": passwordFocus,
                        })}
                      >
                      <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Contact Number"
                          type="text"
                          onFocus={(e) => setPasswordFocus(true)}
                          onBlur={(e) => setPasswordFocus(false)}
                        />
                      </InputGroup>      
                      </Col>
                      </Row>              
                      <FormGroup check className="text-left">
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />I agree to the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            terms and conditions
                          </a>
                          .
                        </Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Start digging!
                    </Button>
                  </CardFooter>
                </Card>
          </Col>
          
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}
