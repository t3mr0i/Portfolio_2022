import React from "react";

export class HeaderClass extends React.Component {

    render() {
        return (
            <div className="header">
            <div className="header-menu">
              <div className="header-menu-item">
                <a href="#">Home</a>
              </div>  
              <div className="header-menu-item">
                <a href="#">About</a>
              </div>
              <div className="header-menu-item">
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        );
    }
}