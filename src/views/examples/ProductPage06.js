import React from "react";
// react plugin used to create DropdownMenu for selecting items
// import Select from "react-select";

// reactstrap components
import {
  Badge,
  Button,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const items = [
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-01.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-02.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-03.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-04.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-05.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/06-05.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "0",
  },
];

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("product-page01");
    return function cleanup() {
      document.body.classList.remove("product-page01");
    };
  }, []);
  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const deleteQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };
  const addQuantity = () => {
    setQuantity(quantity === 100 ? 100 : quantity + 1);
  };

  return (
    <>
      <ColorNavbar />      
        <div className="section">
          <Container>
            <Row>
              <Col lg="6" md="12">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    className="mt-5"
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item, key) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={key}
                        className="justify-content-center"
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
                      previous();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="primary"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="tim-icons icon-minimal-left" />
                    </Button>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <Button
                      className="btn-icon btn-round"
                      color="primary"
                      name="button"
                      size="sm"
                      type="button"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </a>
                </Carousel>
              </Col>
              <Col className="mx-auto" lg="6" md="12">
                <h2 className="title text-primary">Wearable Egg Vibrator</h2>     
                <Badge color="danger">A Happy Rabbit Favorite</Badge>                         
                <h2 className="main-price">R 999</h2>
                <h5 className="category">Description</h5>
                <p className="description text-white">
                Experience unparalleled pleasure with this app-controlled vibrator. With 9 powerful vibrating modes and an additional 5 fashionable entertainment modes including music, video, custom, shake, and interactive, this wearable vibrator offers a range of experiences for ultimate sexual pleasure. <br/>
                Take control to the next level with the app and remote control. Whether you're separated by distance or simply looking to enhance your intimate connection, the app allows your partner to control the vibrator through Bluetooth, creating a unique and shared experience regardless of time and place. Perfect for couples or those in long-distance relationships, this app-controlled toy will spice up your love life.<br/>
                Enjoy the convenience of 3 control methods. Use the wearable vibrator's 10 strong vibration modes for solo play, or explore hands-free pleasure with the included wireless remote. For couple play, the app control option allows you to customize countless private and exclusive modes, creating an intimate and personalized experience.<br/>
                Discover endless fun with the interactive mode, granting partners the ability to control the toy from a distance, even across borders. This feature allows for discreet and exhilarating public stimulation, bringing you closer together no matter the physical distance. Engage in video sessions through the app and witness your partner's real-time reactions and expressions, adding an exciting visual element to your play. Additionally, explore video mode, music mode, drawing, and more <br/>                
                </p>
                <br />
                <Row className="pick-size">
                  <Col lg="4" md="4">
                    <label>Quantity</label>
                    <InputGroup>
                      <div className="input-group-btn">
                        <Button
                          className="btn-round btn-simple"
                          color="primary"
                          onClick={deleteQuantity}
                        >
                          <i className="tim-icons icon-simple-delete" />
                        </Button>
                      </div>
                      <Input
                        className="input-number text-white"
                        value={quantity}
                        id="myNumber"
                        type="text"
                        onChange={(e) => {
                          setQuantity(parseInt(e.target.value));
                        }}
                      />
                      <div className="input-group-btn">
                        <Button
                          className="btn-round btn-simple"
                          color="primary"
                          onClick={addQuantity}
                        >
                          <i className="tim-icons icon-simple-add" />
                        </Button>
                      </div>
                    </InputGroup>
                  </Col>
                  <Col className="justify-content-start">
                  <Button className="ml-3" color="primary">
                    Add to Cart  <i className="tim-icons icon-cart" />
                  </Button>
                </Col>                                                              
                </Row>                                
              </Col>
            </Row>
          </Container>
        </div>        
        <div className="section related-products">
          
          <div className="wrapper" ref={wrapper}>
        <div className="page-header page-header-small">
          <img
            alt="..."
            className="path shape"
            src={require("assets/img/shape-s.png")}
          />
        </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
