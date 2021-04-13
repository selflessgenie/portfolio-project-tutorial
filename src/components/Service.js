import React, { Component } from "react";

const Service = () => {
  return(
    
      <div className="container-fluid">
          <div className="row services-row-1">
            <div className="col-sm">
              <div className = "w-50 services-heading-wrapper">
                <h1 className = "services-heading">we create solutions for businesses</h1>
              </div>
              <div className="services-summary-wrapper">
                <p className = "w-50 mx-auto services-summary d-none d-sm-block d-sm-none d-md-block">
                  A clean and modern in-demand Websites and Mobile apps built with the trending and advanced techstacks like React JS and React native with springboot on the server side.  
                </p>
              </div>
              <div className="w-100 see-our-services-button-wrapper">                
                <input type="submit" className="mx-auto see-our-services-button" value="See Our services"/>                
              </div>
            </div>
          </div>
        
        <div id="row2" className="row">
          <div className="col-sm" style={{backgroundColor:"black"}}>
            <h1>Second section</h1>
          </div>
        </div>

      </div>
  )
}

export default Service;