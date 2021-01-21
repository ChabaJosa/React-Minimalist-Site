import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { Menu, Segment } from "semantic-ui-react";

export default function Navbar({hook}) {
  // Returns current route
  const pathname = window.location.pathname;
  // Gets a string from the pathname after the backlash
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div style={{ background: '#1b1c1d'}}>
      <Container fluid>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Menu position="right">
              <Menu.Item
                name="home"
                color='red'
                active={activeItem === "home"}
                onClick={handleItemClick}
                // as={Link}
                // to="/"
              />
              <Menu.Item
                name="messages"
                color='orange'
                active={activeItem === "messages"}
                onClick={handleItemClick}
                // as={Link}
                // to="/"
              />
              <Menu.Item
                name="friends"
                color='green'
                active={activeItem === "friends"}
                onClick={handleItemClick}
                // as={Link}
                // to="/"
              />
              <Menu.Item
                name="Social"
                color='yellow'
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
