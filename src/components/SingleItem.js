import React from 'react'
import { Badge } from 'react-bootstrap'
import { BiCalendar } from 'react-icons/bi'
import { RiMessage2Line } from 'react-icons/ri'


const SingleItem = ({ badge, date, img, sms }) => {



    return (

        <div className="blog__carousel-single-item">
            <img src={img}></img>
            <Badge className="badge badge-success blog__carousel-single-item-badge">{badge}</Badge>
            <div className="blog__carousel-single-item-date">
                <BiCalendar color="white" />
                <p>{date}</p>
                <div className="d-flex  ml-5">
                    <RiMessage2Line color="white" />
                    <p className="pl-1">{sms}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
