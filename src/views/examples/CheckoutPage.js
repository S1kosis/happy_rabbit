import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroup,
  Media,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export default function CheckoutPage() {
  const [paymentTabs, setPaymentTabs] = React.useState(1);
  const [discountFocus, setDiscountFocus] = React.useState(undefined);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("checkout-page");
    return function cleanup() {
      document.body.classList.remove("checkout-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="section">
          <Container>
            <Row>
              <Col lg="4">
                <h2 className="title">Order summary</h2>
                <Card>
                  <CardBody>
                    <Media className="align-items-center mb-3">
                      <Col md="5" xs="6">
                        <img
                          alt="..."
                          className="img-fluid rounded shadow"
                          src={require("assets/img/gucci.png")}
                        />
                      </Col>
                      <Media body>
                        <h2 className="h6">Shorts</h2>
                        <small className="d-block text-secondary">Small</small>
                      </Media>
                      <Media body className="text-right">
                        <span>$29</span>
                      </Media>
                    </Media>
                    <Media className="align-items-center">
                      <Col md="5" xs="6">
                        <img
                          alt="..."
                          className="img-fluid rounded shadow"
                          src={require("assets/img/jacket.png")}
                        />
                      </Col>
                      <Media body>
                        <h2 className="h6 mb-0">Jacket</h2>
                      </Media>
                      <Media body className="text-right">
                        <span>$999</span>
                      </Media>
                    </Media>
                    <hr className="line-primary mb-5" />
                    <Form className="code-validate">
                      <label>Discount</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": discountFocus,
                        })}
                      >
                        <Input
                          aria-label="Discount"
                          name="name"
                          placeholder="Discount Code"
                          type="text"
                          onFocus={(e) => setDiscountFocus(true)}
                          onBlur={(e) => setDiscountFocus(false)}
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="button">
                            Apply
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Form>
                    <hr className="line-primary mb-3" />
                    <Media className="align-items-center">
                      <h3 className="h6 text-primary mr-3">Subtotal</h3>
                      <Media body className="text-right">
                        <span>$1038</span>
                      </Media>
                    </Media>
                    <Media className="align-items-center">
                      <h3 className="h6 text-primary mr-3">Shipping</h3>
                      <Media body className="text-right">
                        <span>$5.8</span>
                      </Media>
                    </Media>
                    <hr className="line-primary mb-3" />
                    <Media className="align-items-center">
                      <h3 className="h6 text-primary">Total</h3>
                      <Media body className="text-right">
                        <span className="font-weight-semi-bold">$1045.8</span>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="8">
                <Form className="js-validate">
                  <Container>
                    <h3 className="title">Billing address</h3>
                    <Row>
                      <Col md="6">
                        <label className="labels">
                          First name <span className="text-danger">*</span>
                        </label>
                        <Input
                          aria-label="Cristopher"
                          name="firstName"
                          placeholder="Cristopher"
                          required=""
                          type="text"
                        />
                      </Col>
                      <Col md="6">
                        <label className="labels">
                          Last name <span className="text-danger">*</span>
                        </label>
                        <Input
                          aria-label="Thompson"
                          name="lastName"
                          placeholder="Thompson"
                          required=""
                          type="text"
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="6">
                        <div className="js-form-message mb-6">
                          <label className="labels">
                            Email address <span className="text-danger">*</span>
                          </label>
                          <Input
                            aria-label="thompson@gmail.com"
                            name="emailAddress"
                            placeholder="thompson@gmail.com"
                            required=""
                            type="email"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="js-form-message mb-6">
                          <label className="labels">Phone</label>
                          <Input
                            aria-label="+4 (0762) 230991"
                            placeholder="+4 (0762) 230991"
                            type="text"
                          />
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="8">
                        <div className="js-form-message mb-6">
                          <label className="labels">
                            Street address{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Input
                            aria-label="420 Long Beach, CA"
                            name="streetAddress"
                            placeholder="420 Long Beach, CA"
                            required=""
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="js-form-message mb-6">
                          <label className="labels">
                            Postal code<span className="text-danger">*</span>
                          </label>
                          <Input
                            aria-label="340112"
                            name="postcode"
                            placeholder="340112"
                            required=""
                            type="text"
                          />
                        </div>
                      </Col>
                    </Row>
                    <br />               
                    <h4 className="title">Payment method</h4>
                    <ButtonGroup
                      className="nav nav-tabs nav-tabs-primary"
                      role="tablist"
                    >
                      <Button
                        color="primary"
                        href="#pablo"
                        className={classnames("btn-simple", {
                          active: paymentTabs === 1,
                        })}
                        onClick={(e) => {
                          e.preventDefault();
                          setPaymentTabs(1);
                        }}
                        size="sm"
                      >
                        Credit Card
                      </Button>
                      <Button
                        color="primary"
                        href="#pablo"
                        className={classnames("btn-simple", {
                          active: paymentTabs === 2,
                        })}
                        onClick={(e) => {
                          e.preventDefault();
                          setPaymentTabs(2);
                        }}
                        size="sm"
                      >
                        PayPal
                      </Button>
                    </ButtonGroup>
                    <TabContent
                      className="tab-space"
                      activeTab={"payment" + paymentTabs}
                    >
                      <TabPane tabId="payment1">
                        <Row>
                          <Col md="12">
                            <div className="js-form-message">
                              <label className="form-label">Card number</label>
                              <Input
                                aria-label="**** **** **** ***"
                                name="cardNumber"
                                placeholder="**** **** **** ***"
                                required=""
                                type="text"
                              />
                            </div>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md="8">
                            <div className="js-form-message mb-6">
                              <label className="form-label">Card holder</label>
                              <Input
                                aria-label="Jack Wayley"
                                name="cardHolder"
                                placeholder="Jack Wayley"
                                required=""
                                type="text"
                              />
                            </div>
                          </Col>
                          <Col md="2">
                            <div className="js-form-message mb-6">
                              <label className="form-label">Expiration</label>
                              <Input
                                aria-label="MM/YY"
                                name="cardExpirationDate"
                                placeholder="MM/YY"
                                required=""
                                type="text"
                              />
                            </div>
                          </Col>
                          <Col md="2">
                            <div className="js-form-message mb-6">
                              <label className="form-label">CVC</label>
                              <Input
                                aria-label="***"
                                name="cardCVC"
                                placeholder="***"
                                required=""
                                type="text"
                              />
                            </div>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-between align-items-center">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <span className="fas fa-angle-left mr-2" />
                            Return to cart
                          </a>
                          <Button color="primary" size="sm" type="button">
                            Order now
                          </Button>
                        </div>
                      </TabPane>
                      <TabPane tabId="payment2">
                        <h5>Send payment to:</h5>
                        <Input
                          placeholder="Name or email"
                          required=""
                          type="text"
                        />
                        <br />
                        <Button color="info" size="sm" type="button">
                          Pay with PayPal
                        </Button>
                      </TabPane>
                    </TabContent>
                  </Container>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
