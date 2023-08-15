// =========== Imports =============

import React from "react";
// react plugin used to create DropdownMenu for selecting items
// import Select from "react-select";

// TODO: Use axios to interact with Strapi.
import axios from "axios";
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
import { useState, useEffect } from 'react';


// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";


// =========== Docs =============

//   {
//     "data": {
//         "id": 1,
//         "attributes": {
//             "productTitle": "test1",
//             "productDesc": "longtest1",
//             "productPrice": 111,
//             "createdAt": "2023-08-14T20:16:52.070Z",
//             "updatedAt": "2023-08-15T19:54:15.112Z",
//             "publishedAt": "2023-08-14T20:16:54.195Z"
//         }
//     },
//     "meta": {}
// }

// =========== Code =============
const items = [
  {
    content: (
      <img
        alt="..."
        className="d-block"        
        src="http://localhost:1337/uploads/01_08_5e1169eb05.jpg"
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
        src={require("assets/img/product-pages/01-03.jpg")}
      />
    ),
    altText: "",
    caption: "",
    src: "1",
  },
  // {
  //   content: (
  //     <img
  //       alt="..."
  //       className="d-block"
  //       src={require("assets/img/product-pages/rose3.jpg")}
  //     />
  //   ),
  //   altText: "",
  //   caption: "",
  //   src: "2",
  // },
  // {
  //   content: (
  //     <img
  //       alt="..."
  //       className="d-block"
  //       src={require("assets/img/product-pages/rose4.jpg")}
  //     />
  //   ),
  //   altText: "",
  //   caption: "",
  //   src: "2",
  // },
  // {
  //   content: (
  //     <img
  //       alt="..."
  //       className="d-block"
  //       src={require("assets/img/product-pages/rose5.jpg")}
  //     />
  //   ),
  //   altText: "",
  //   caption: "",
  //   src: "2",
  // },
  // {
  //   content: (
  //     <img
  //       alt="..."
  //       className="d-block"
  //       src={require("assets/img/product-pages/rose6.jpg")}
  //     />
  //   ),
  //   altText: "",
  //   caption: "",
  //   src: "2",
  // },
  // {
  //   content: (
  //     <img
  //       alt="..."
  //       className="d-block"
  //       src={require("assets/img/product-pages/rose7.jpg")}
  //     />
  //   ),
  //   altText: "",
  //   caption: "",
  //   src: "2",
  // },
];

export default function ProductPage({ id = 1 }) { // TODO: Read about react props.
  const url = `http://localhost:1337/api/products/${id}`; // TODO: move this to a secure file (in the .env). IMPORTANT!!!!
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [productId, setProductId] = React.useState(null);
  const [product, setProduct] = React.useState({}); // NB: If its a single use {} (Object), if List or Many use [] (Array of objects)
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

  // Get the product from Strapi.
  const getProduct = async () => {    
    const data = await axios.get(url)
        .then(response => {
          const statusCode = response.status;
          setProductId(response.data.data.id);
          setProduct(response.data.data.attributes);
          if (statusCode !== 200) {
            console.error("Invalid Status Code")
            return "Product not found"; // TODO: (Alert) Set up an alert using nodemailer to admin and show an error alert on screen.
          };
          console.log("*** Product: ", response) // TODO: Remove this line
          return response // Might need to remove
        }).catch((err) =>{
          console.error("Custom Error: ", err) // TODO: Remove this line
          return "Product not found"; // TODO: Set up an alert using nodemailer to admin and show an error alert on screen.
        }); // https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
  };
  
  useEffect(() => {
    getProduct();
    console.warn(product, productId)
  }, []); // Monitor this useEffect and watch for productId changes when this file becomes dynamic.

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

  console.log("@=> ", product, productId)
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
                <h2 className="title text-primary">{ product.productTitle }</h2>
                {/* <h2 className="title text-primary">Rose</h2>                               */}
                <h2 className="main-price">R { product.productPrice }</h2>
                <h5 className="category">Description</h5>
                <p className="description text-white">
                  {  product.productDesc }
                </p>
                {/* <p className="description text-white">                  
                The Triple action Rose vibrator was designed with one thing in mind… Experience! <br/>                
Boasting 5 thrust and vibration modes as well as 7 “tongue licking” modes to enhance and excite. The independent operating modes allow you to personalize the experience to suit your desire, whether it be during personal time, or with a partner.
This Happy Rabbit favorite is silent and has built in USB magnetic charging (so no need to fuss about AA batteries).
Made from high quality silicone (ABS), 100% waterproof and easily cleanable, making the Rose Vibrator the perfect sexy companion

                </p> */}
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