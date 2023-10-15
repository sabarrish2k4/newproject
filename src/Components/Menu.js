import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import "./Menu.css";

const { Header, Content } = Layout;

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    
      <Content>
        <div className="landing-container">
          <div className={`sidebar ${isMenuOpen ? "open" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ul>
              <li>
                <Link to="/observation">Observation</Link>
              </li>
              <li>
                <Link to="/tintingbangalore">Tinting-Banco & D180-Bangalore</Link>
              </li>
              <li>
                <Link to="/ColourantsNoombal">ColourantsNoombal</Link>
              </li>
              <li>
                <Link to="/Observation">Observation</Link>
              </li>
              <li>
                <Link to="/Tinting-Banco">Tinting-Banco</Link>
              </li>
              <li>
                <Link to="/Request">Request</Link>
              </li>
              
              {/* Add more Link elements as needed */}
            </ul>
          </div>
          <div className={`menu-button ${isMenuOpen ? "open" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button type="link" icon={<MenuOutlined />} onClick={toggleMenu} style={{ color: "#000", fontSize: "24px" }} />
          </div>
        </div>
      </Content>
    
  );
};

export default Menu;

