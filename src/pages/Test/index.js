import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { BiCalendar } from 'react-icons/bi'
import { RiMessage2Line } from 'react-icons/ri'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsChevronRight } from 'react-icons/bs'
import SingleItem from '../../components/SingleItem'



import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="right-arrow" onClick={onClick}>
            <BsChevronRight className="arrow" color="white" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="left-arrow" onClick={onClick}>
            <AiOutlineLeft color="white" />
        </div>
    );
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
                    <span className="bol"></span>
                    <span className="bol-two"></span>
                    <Slider {...settings}>
                        
                        <div>
                            <SingleItem
                                badge="NEWS"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26824312324126.png"
                            />
                        </div>
                        <div>
                            <SingleItem
                                badge="Health"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26801830821918.png"
                            />
                        </div>
                        <div>
                            <SingleItem
                                badge="Fashion"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26824312324126.png"
                            />
                        </div>
                        <div>
                            <SingleItem
                                badge="NEWS"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26824312324126.png"
                            />
                        </div>
                        <div>
                            <SingleItem
                                badge="NEWS"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26801830821918.png"
                            />
                        </div>
                        <div>
                            <SingleItem
                                badge="NEWS"
                                date="12 oct 2021"
                                sms="26"
                                img="/images/26824312324126.png"
                            />
                        </div>


                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}

export default Test
