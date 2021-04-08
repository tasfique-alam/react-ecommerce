import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { FormControl, InputGroup } from "react-bootstrap"



const SingleSidebar = ({ title }) => {

    const [expand, setExpand] = useState(true)

    return (


        <div className="titleBlog my-4">
            <div onClick={() => setExpand(!expand)} className="d-flex justify-content-between py-2">
                <label className="mb-0 f-16 title">{title}</label>
                <MdKeyboardArrowDown className="icon align-self-center" />
            </div>

            {expand && <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search by Brands"
                        aria-label="Search by Brands"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2"><BsSearch /></InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

                <div className="radioBlog">
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Antony Morato</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Arrow Blue Jeans</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Arrow Blue Jeans</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Arrow Blue Jeans</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Arrow Blue Jeans</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Arrow Blue Jeans</span>
                    </div>
                    <div className="d-flex align-items-center radio flex-row">
                        <input type="radio" name="radioButtonSet" value='input1' standalone defaultChecked ></input>
                        <span>Aeropostale</span>
                    </div>
                </div>
            </div>

            }
        </div>
    );
};

export default SingleSidebar;
