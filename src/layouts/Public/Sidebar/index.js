import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Form } from "react-bootstrap";
const Sidebar = () => {
  return (
    <div className="product-sidebar-area">
      <div className="d-flex justify-content-between">
        <label className="mb-0">Brand</label>
        <MdKeyboardArrowDown className="align-self-center" />
      </div>
      <Form.Control type="text" placeholder="Search by Brands" />
    </div>
  );
};

export default Sidebar;
