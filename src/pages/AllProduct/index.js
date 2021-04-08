import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Sidebar from "../../layouts/Public/Sidebar";

const Product = () => {
  return (
    <div className="product-area">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={8}>
          <Row>
            <Col xs={6} md={3}>
              <Card className="border-0 card-container">
                <Card.Img
                  className="image-container img-fluid"
                  variant="top"
                  src="images/8e-300x300.png"
                />
                <Card.Body className="card-content">
                  <Card.Text className=" mb-1">
                    Multicolor Cotton long sleeve shirt for men
                  </Card.Text>
                  <h5>BDT. 7,850</h5>
                  <div className="d-flex justify-content-between">
                    <p className="product-price">
                      <del>BDT. 7,850</del>
                    </p>
                    <p className="product-price">34% Off</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=4
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
