import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};

const Test = () => {
    return (
        <Container className="blog">
            <Row className="justify-content-center">
                <Col lg={12}>
                    <p className="text-center blog__title">LATEST BLOGS</p>
                    <p className="text-center blog__des">
                        This is a place devoted to giving you deeper
                        insight into the news,trends, people and
                    technology behind Bing.</p>
                </Col>
                <Col lg={12}>
                    <Slider {...settings}>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                        <div className="blog__carousel-single-item">
                            <img src="/images/26801830821918.png"></img>
                        </div>
                       
                       
                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}

export default Test
