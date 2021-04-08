import React from "react"
import SingleSidebar from "./SingleSidebar";



const Sidebar = () => {

  return (


    <div className="product-sidebar-area">
       <SingleSidebar title="Brand"/>
       <SingleSidebar title="Country"/>
       <SingleSidebar title="Fabric"/>
       <SingleSidebar title="Pattern"/>
       <SingleSidebar title="Clothing Style"/>
       <SingleSidebar title="Fit Type"/>
    </div>
  );
};

export default Sidebar;
