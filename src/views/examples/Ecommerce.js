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
import axios from "axios";

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
import BackScroller from "components/Navbars/BackScroller.js"

//  =========== Docs =============

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

// export default function Ecommerce({ id = 1 }) {
//   const [transform, setTransform] = React.useState(
//     "translate3d(0," +
//     (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
//     "px,0)"
//     ); // TODO: Read about react props.
//   const url = `http://localhost:1337/api/products/${id}`; // TODO: move this to a secure file (in the .env). IMPORTANT!!!!
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const [quantity, setQuantity] = React.useState(1);
//   const [productId, setProductId] = React.useState(null);
//   const [product, setProduct] = React.useState({}); // NB: If its a single use {} (Object), if List or Many use [] (Array of objects)
//   const wrapper = React.useRef(null);

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
              src={require("assets/img/product-pages/03-01.jpg")}
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
              src={require("assets/img/product-pages/01-01.jpg")}
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
  const [transform, setTransform] = React.useState(
    "translate3d(0," +
      (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
      "px,0)"
  );

  const url = `http://localhost:1337/api/products?populate=*`; // TODO: move this to a secure file (in the .env). IMPORTANT!!!!
  const [products, setProducts] = React.useState([]); // NB: If its a single use {} (Object), if List or Many use [] (Array of objects)
  const [carousel1Index, setCarousel1Index] = React.useState(0);
  const [carousel2Index, setCarousel2Index] = React.useState(0);
  const [animating1, setAnimating1] = React.useState(false);
  const [animating2, setAnimating2] = React.useState(false);
  const wrapper = React.useRef(null);
  // Get Products (Axios call)
  // Get the product from Strapi.
  const getProducts = async () => {
    const data = await axios.get(url)
        .then(response => {
          const statusCode = response.status;
          setProducts(response.data.data);
          if (statusCode !== 200) {
            console.error("Invalid Status Code")
            return "Products not found"; // TODO: (Alert) Set up an alert using nodemailer to admin and show an error alert on screen.
          };
          return response // Might need to remove
        }).catch((err) =>{
          console.error("Custom Error: ", err) // TODO: Remove this line
          return "Products not found"; // TODO: Set up an alert using nodemailer to admin and show an error alert on screen.
        }); // https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
  };
  
  React.useEffect(() => {
    getProducts(); 
    console.warn(products)
  }, []); // Monitor this useEffect and watch for productId changes when this file becomes dynamic.

  //
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
  // products.map((item, index) => {}
  return (
    <>

    {/* 
        0. [MAPPING] We want to set ALLLLLL the data before renderinf (I>E RETURN -> return {}.. ^^ 3 lines up.
        1. We want an array {} of products. 
        2. The array must have everything of a product (title, description, picture, price, url, id,  #the delivery details)
        3. Create the context / component
        4. Render dynamic component.
        
        */}       
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>        
  <div className="header header-1">
    <div className="page-header header-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + require("assets/img/hrweblogo.png") + ")", // TODO: Store in strapi.
          transform: transform,
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
         {
        products.map((product, index) => {
              return (     
                <span>            
        <Row>
          <Col className="ml-auto mr-auto text-center" md="6">
            <h2 className="title">All about the buzz!</h2>
          </Col>
        </Row>
        <Row>
          <Col md="12">          
            <Row>             
              <Col lg="3" md="6">                    
                    <Card key={index} to="/product-page02" tag={Link} className="card-product card-plain">
                      <span className="card-image">
                          <img
                            alt="..."
                            src={require("assets/img/product-pages/02-01.jpg")}
                          />                          
                      </span>
                      <CardBody>                          
                          <CardTitle tag="h4">
                            <span>
                              {`${product.attributes.productTitle}`}
                            </span>
                          </CardTitle>                                 
                        <CardFooter>
                          <div className="price-container">
                            <span className="price">
                            {`R ${product.attributes.productPrice}`}
                            </span>
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
                {/* end card TODO: clean up all code for cards not used */}
              </Col>              
            </Row>                
          </Col>
        </Row>
        </span>
         )
        })
      }      
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
                <Card to="/product-page05" tag={Link} className="card-product card-plain">
                  <div className="card-image">                          
                      <img
                        alt="..."
                        // src={`${url + product.data[index].attributes.productPic.data[0].attributes.url}`}
                      />
                      </div>
                  <CardBody>                          
                      <CardTitle tag="h4">Wearable Panty Vibrator</CardTitle>
                      <Badge color="danger">APP CONTROLLED</Badge>
                    <CardFooter>
                      <div className="price-container">
                        <span className="price">R 999</span>
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
                <Card to="/product-page06" tag={Link} className="card-product card-plain">
                  <div className="card-image">                          
                      <img
                        alt="..."
                        src={require("assets/img/product-pages/06-01.jpg")}
                      />                          
                  </div>
                  <CardBody>                          
                      <CardTitle tag="h4">Wearable Egg Vibrator</CardTitle>
                      <Badge color="danger">APP CONTROLLED</Badge>                          
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
  </div>
</div>      
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
     <DemoFooter />
    </>
  );
} 