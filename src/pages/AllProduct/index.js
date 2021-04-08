import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Sidebar from "../../layouts/Public/Sidebar"
import SingleProduct from '../../components/Product'
import Test from "../Test";

const Product = () => {
  return (
    <div className="product-area">
      <Row>
        <Col lg={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>


          <Row className="mt-3">
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/8e-300x300.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-1.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/asset-2.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-3.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/8e-300x300.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-1.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/asset-2.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-3.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/8e-300x300.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-1.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/asset-2.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-3.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/8e-300x300.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-1.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
            <SingleProduct
                img="images/asset-2.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
            <Col xs={6} md={3}>
              <SingleProduct
                img="images/asset-3.png"
                title="Multicolor Cotton long sleeve shirt for men"
                price="BDT. 7,850"
                oldPrice="BDT. 7,850"
                off="34% Off"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Test/>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
