import React from "react";
import { Link } from "react-router-dom";

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

export default function BackScroller() {
  const url = `http://localhost:1337/api/products?populate=*`; // TODO: move this to a secure file (in the .env). IMPORTANT!!!!
  const [products, setProducts] = React.useState([]); // NB: If its a single use {} (Object), if List or Many use [] (Array of objects)
  const [carousel1Index, setCarousel1Index] = React.useState(0);
  const [carousel2Index, setCarousel2Index] = React.useState(0);
  const [animating1, setAnimating1] = React.useState(false);
  const [animating2, setAnimating2] = React.useState(false);
  const wrapper = React.useRef(null);
  const [transform, setTransform] = React.useState(
    "translate3d(0," +
      (window.innerWidth >= 768 ? window.pageYOffset / 3 : 0) +
      "px,0)"
  );
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
        <Row>
          <Col className="ml-auto mr-auto text-center" md="6">
            <h2 className="title">All about the buzz!</h2>
          </Col>
        </Row>
        <Row>{
            products.map((product, index) => {
              return (
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
              )
            })
          }
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
}