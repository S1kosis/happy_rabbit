import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const items1 = [
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Mama2jaz (Rose)</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
            Buy it and thank me later! This is my first time ever buying a toy like this, it BLEW MY MIND! I orgasm 2-3 times and each time I use it.
              This toy is absolutely amazing. 
               And it’s fantastic for someone like me who is choosing to be single to work on themselves … I can still get the same oral and
                penetration experience as having a partner without actually having a partner which is again, amazing. 
                Have fun
            </h4>
            </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/rosetemp2.png")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">CB and JG</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
            Great product, we had a similar item from another manufacturer that was weak and quit working. This was a replacement. 
            We are happy we made this choice. It is less expensive, but much better quality, and stronger thrusting and vibrations. 
            The "tail or stem" is actually what she likes best. It has thrust and also has vibration settings. So it can move 
            back and forth over the most sensitive areas at the same time stimulating with several levels of vibration. 
            This one will keep her arched up with toes curled! 
            </h4>
            </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/rosetemp2.png")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">NJVM</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
            I don’t play with myself because I either don’t know how to do it properly or it just doesn’t work for me. 
            I’ve owned 2 other vibrators in my life time, and threw those away after first use because they didn’t do absolutely 
            anything for me. I gave up on sex until I finally fell in love and realized that I had to be in love in order to feel sexual 
            pleasure. Turns out this device is my soulmate and I’m in love. I have never felt anything like 
            this in my life. I am 30 years old and this thing just changed my entire life. I could have avoided so many heart breaks
             had I found this thing sooner. Thank you!! Amazing!! Definitely recommend.
            </h4>            
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("assets/img/sucktemp2.png")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1",
  },
];

export default function Ecommerce() {
  const [setTransform] = React.useState(
    "translate3d(0," +
      (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
      "px,0)"
  );
  const [carousel1Index, setCarousel1Index] = React.useState(0);
  const [carousel2Index, setCarousel2Index] = React.useState(0);
  const [animating1, setAnimating1] = React.useState(false);
  const [animating2, setAnimating2] = React.useState(false);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("ecommerce-page");
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      setTransform("translate3d(0," + windowScrollTop + "px,0)");
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  }, []);
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const onExiting = (carousel) => {
    if (carousel === 1) {
      setAnimating1(true);
    } else {
      setAnimating2(true);
    }
  };

  const onExited = (carousel) => {
    if (carousel === 1) {
      setAnimating1(false);
    } else {
      setAnimating2(false);
    }
  };
  const next = (carousel, items) => {
    if (carousel === 1) {
      if (animating1) {
        return;
      }
    } else {
      if (animating2) {
        return;
      }
    }
    let currentIndex = -1;
    if (carousel === 1) {
      currentIndex = carousel1Index;
    } else {
      currentIndex = carousel2Index;
    }
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    if (carousel === 1) {
      setCarousel1Index(nextIndex);
    } else {
      setCarousel2Index(nextIndex);
    }
  };
  const previous = (carousel, items) => {
    if (carousel === 1) {
      if (animating1) {
        return;
      }
    } else {
      if (animating2) {
        return;
      }
    }
    let currentIndex = -1;
    if (carousel === 1) {
      currentIndex = carousel1Index;
    } else {
      currentIndex = carousel2Index;
    }
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    if (carousel === 1) {
      setCarousel1Index(nextIndex);
    } else {
      setCarousel2Index(nextIndex);
    }
  };

  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="header header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/hrweblogo.png") + ")",                
              }}
            />
            <Container>
              <Row>
                <Col className="mr-auto text-left" lg="6" md="7">
                  <h1 className="title">Only here for good vibes!</h1>                       
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="main">
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">All about the buzz!</h2>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Row>
                    <Col lg="3" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/rosetemp.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Dual Action Rose Vibrator</CardTitle>
                          </a>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">R 799</span>
                            </div>
                            <Button
                              className="btn-icon btn-round pull-right pulse"
                              color="primary"
                              id="tooltip426328914"
                            >
                              <i className="tim-icons icon-cart" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip426328914"
                            >
                              Add to cart
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                    <Col lg="3" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/sucktemp.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Sucking Vibrator</CardTitle>
                          </a>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">R 799</span>
                            </div>
                            <Button
                              className="btn-icon btn-round pull-right pulse"
                              color="primary"
                              id="tooltip744986655"
                            >
                              <i className="tim-icons icon-cart" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip744986655"
                            >
                              Add to Cart
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                    <Col lg="3" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/wandtemp.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">AV Wand</CardTitle>
                          </a>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">R 549</span>
                            </div>
                            <Button
                              className="btn-icon btn-round pull-right pulse"
                              color="primary"
                              id="tooltip461484140"
                            >
                              <i className="tim-icons icon-cart" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip461484140"
                            >
                              Add to Cart
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
             
          </div>
          <div className="main">
            <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">Control at your fingertips!</h2>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Row>
                    <Col lg="3" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/butterflytemp.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">Butterfly Vibrator</CardTitle>
                            <Badge color="primary">APP CONTROLLED</Badge>
                          </a>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">R 549</span>
                            </div>
                            <Button
                              className="btn-icon btn-round pull-right pulse"
                              color="primary"
                              id="tooltip461484140"
                            >
                              <i className="tim-icons icon-cart" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip461484140"
                            >
                              Add to Cart
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                    <Col lg="3" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/avwandtemp.png")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <CardTitle tag="h4">AV Wand</CardTitle>
                            <Badge color="primary">APP CONTROLLED</Badge>
                          </a>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">R 549</span>
                            </div>
                            <Button
                              className="btn-icon btn-round pull-right pulse"
                              color="primary"
                              id="tooltip461484140"
                            >
                              <i className="tim-icons icon-cart" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip461484140"
                            >
                              Add to Cart
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
          {/* section */}
          <div className="testimonials-1 section-image">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">What Clients Say</h2>
                </Col>
              </Row>
              <Carousel
                activeIndex={carousel1Index}
                next={() => next(1, items1)}
                previous={() => previous(1, items1)}
                className="carousel-team"
              >
                {items1.map((item, key) => {
                  return (
                    <CarouselItem
                      onExiting={() => onExiting(1)}
                      onExited={() => onExited(1)}
                      key={key}
                    >
                      {item.content}
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous(1, items1);
                  }}
                  role="button"
                >
                  <i className="tim-icons icon-minimal-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next(1, items1);
                  }}
                  role="button"
                >
                  <i className="tim-icons icon-minimal-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Container>
          </div>
        </div>
        {/* end-main-raised */}
        <DemoFooter />
      </div>
    </>
  );
}
