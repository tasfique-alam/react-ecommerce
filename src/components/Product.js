import React from "react";
import { Card } from "react-bootstrap";

const SingleProduct = ({ img, title, price, oldPrice, off }) => {

    return (

        <Card className="border-0 card-container">
            <Card.Img
                className="image-container img-fluid"
                variant="top"
                src={img}
            />
            <Card.Body className="card-content">
                <Card.Text className=" mb-1">
                    {title}
                </Card.Text>
                <h5>{price}</h5>
                <div className="d-flex justify-content-between">
                    <p className="product-price">
                        <del>{oldPrice}</del>
                    </p>
                    <p className="product-price-offer">{off}</p>
                </div>
            </Card.Body>
        </Card>

    );
};

export default SingleProduct;
