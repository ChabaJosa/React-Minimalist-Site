import React, { useState } from "react";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

import Nav from "./navbar";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";

export default function VerticalSidebar() {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <div>
      <Sidebar
        as={Menu}
        animation={"scale down"}
        direction={"right"}
        icon="labeled"
        inverted
        vertical
        visible={activeSideBar}
        width="thin"
      >
        <Menu.Item as="a">
          <Button
            onClick={() => {
              setActiveSideBar(false);
            }}
          >
            <Icon name="undo" />
            Back
          </Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="instagram" />
          Instagram
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="facebook" />
          Facebook
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="twitter" />
          Twitter
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="mobile" />
          Apps 
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="code" />
          Coding 
        </Menu.Item>
      </Sidebar>
      {/* Page Content Below Here */}
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={activeSideBar}>
          {/* Passes Sidebar Hook to Navbar */}
          <Nav hook={setActiveSideBar} /> 
          <div class="main-container">
            <Container1 />
            <Container2 />
            <Container3 />
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
