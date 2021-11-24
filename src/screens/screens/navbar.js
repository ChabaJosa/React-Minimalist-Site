import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar({ hook }) {
  // Returns current route
  const pathname = window.location.pathname;
  // Gets a string from the pathname after the backlash
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div style={{ background: "#1b1c1d" }}>
      <Container fluid>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Menu position="right">
              <NavLink to={"/"}>
                <Menu.Item
                  // style={{ textDecoration: "none" }}
                  name="home"
                  color="red"
                  active={activeItem === "home"}
                  onClick={handleItemClick}
                />
              </NavLink>
              <NavLink to={"/Servicios"}>
                <Menu.Item
                  // style={{ textDecoration: "none" }}
                  name="Servicios"
                  color="orange"
                  active={activeItem === "Servicios"}
                  onClick={handleItemClick}
                />
              </NavLink>
              {/* <NavLink to={"/Partnerships"}>
                <Menu.Item
                  // style={{ textDecoration: "none" }}
                  name="Partnerships"
                  color="green"
                  active={activeItem === "Partnerships"}
                  onClick={handleItemClick}
                />
              </NavLink> */}
              <Menu.Item
                name="Redes"
                color="yellow"
                onClick={hook}
                // as={Link}
                // to="/"
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </Container>
    </div>
  );
}
