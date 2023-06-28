import React from "react";
// react plugin used to create DropdownMenu for selecting items
// import Select from "react-select";

// reactstrap components
import {
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
        src={require("assets/img/product-pages/rose1.jpg")}
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
        src={require("assets/img/product-pages/rose2.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/rose3.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "2",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/rose4.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "2",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/rose5.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "2",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/rose6.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "2",
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src={require("assets/img/product-pages/rose7.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "2",
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
                <h2 className="title text-primary">Triple Action Rose Vibrator</h2>                              
                <h2 className="main-price">R 999</h2>
                <h5 className="category">Description</h5>
                <p className="description text-white">
                The Triple action Rose vibrator was designed with one thing in mind… Experience! <br/>                
Boasting 5 thrust and vibration modes as well as 7 “tongue licking” modes to enhance and excite. The independent operating modes allow you to personalize the experience to suit your desire, whether it be during personal time, or with a partner.
This Happy Rabbit favorite is silent and has built in USB magnetic charging (so no need to fuss about AA batteries).
Made from high quality silicone (ABS), 100% waterproof and easily cleanable, making the Rose Vibrator the perfect sexy companion

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
                  {/* <Col lg="4" md="4" sm="6">
                    <label>Select color</label>
                    <Select
                      className="react-select react-select-primary"
                      classNamePrefix="react-select"
                      options={[
                        {
                          value: "",
                          label: "Choose Color",
                          isDisabled: true,
                        },
                        { value: "1", label: "Black" },
                        { value: "2", label: "Gray" },
                        { value: "3", label: "White" },
                      ]}
                    /> */
                  /* </Col>                   */}
                  <Col className="justify-content-start">
                  <Button className="ml-3" color="primary">
                    Add to Cart  <i className="tim-icons icon-cart" />
                  </Button>
                  </Col>
                </Row>
                {/* <br /> */}
                {/* <Row className="justify-content-start">
                  <Button className="ml-3" color="primary">
                    Add to Cart  <i className="tim-icons icon-cart" />
                  </Button>
                </Row> */}
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
