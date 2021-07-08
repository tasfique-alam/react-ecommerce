import React from "react";
import { Row, Col, Form, ListGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer p-5">
      <Row>
        <Col xs={6} md={3}>
          <div className="image-container">
            <img
              className="image-container img-fluid"
              src="/images/footer-img.png"
            ></img>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="d-flex justify-content-center">
            <img
              className="image-container img-fluid mr-5"
              src="/images/002-facebook-logo.png"
            ></img>
            <img
              className="image-container img-fluid mr-5"
              src="/images/001-twitter-logo-silhouette.png"
            ></img>
            <img
              className="image-container img-fluid mr-5"
              src="/images/004-linkedin-logo.png"
            ></img>
            <img
              className="image-container img-fluid mr-5"
              src="/images/instagram (1).png"
            ></img>
            <img
              className="image-container img-fluid"
              src="/images/005-youtube.png"
            ></img>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="footer-sub w-75">
              <label>Subscribe</label>
              <p>Get the latest news from zDrop</p>
              <Form.Control type="email" placeholder="Email Address" />
            </div>
          </div>

          <ListGroup horizontal className="justify-content-between">
            <ListGroup.Item className="title border-0">About zDrop</ListGroup.Item>
            <ListGroup.Item className="title border-0">FAQ & Support</ListGroup.Item>
            <ListGroup.Item className="title border-0">
              Terms & Conditions
            </ListGroup.Item>
            <ListGroup.Item className="title border-0">Privacy Policy</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center">
            <div className="bottom-icon d-flex w-75 justify-content-between">
              <img
                className="image-container h-50"
                src="/images/BKash-bKash-Logo.wine.png"
              ></img>
              <img
                className="image-container h-50"
                src="/images/nagad-logo-7A70CCFEE0-seeklogo.com.png"
              ></img>
              <img
                className="image-container h-50"
                src="/images/g4158.png"
              ></img>
              <img
                className="image-container h-50"
                src="/images/amex-logo-png.png"
              ></img>
              <img
                className="image-container h-50"
                src="/images/Mastercard-logo.png"
              ></img>
              <img
                className="image-container h-50"
                src="/images/Mastercard-logo.png"
              ></img>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <h5>CONTACT US</h5>
          <div className="d-flex">
            <img
              className="image-container h-50 mr-2 mt-1"
              src="/images/customer-service-2-line.png"
            ></img>
            <div>
              <label className="mb-0">Hotline :</label>
              <p>+8801929459195 (10am-10pm/Sat-Thur)</p>
            </div>
          </div>
          <div className="d-flex">
            <img
              className="image-container h-50 mr-2 mt-1"
              src="/images/phone-line.png"
            ></img>
            <div>
              <label className="mb-0">Whole Sales :</label>
              <p>01929459195 (10am-12pm)</p>
            </div>
          </div>
          <div className="d-flex">
            <img
              className="image-container h-50 mr-2 mt-1"
              src="/images/mail-send-line.png"
            ></img>
            <div>
              <label className="mb-0">Email :</label>
              <p>support.example@gmail.com</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
