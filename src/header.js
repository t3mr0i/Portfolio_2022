import React from "react";
import {OnOff} from "./OnOffSwitch";
class Header extends React.Component {

    render() {
        return (
            <div className="header">
            <div className="header-menu">
              <div className="header-menu-item">
                <a href="#">Home</a>
                <OnOff/>
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

export default Header;