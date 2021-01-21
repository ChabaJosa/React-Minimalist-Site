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
            <Icon name="home" />
            Home
          </Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
      {/* Page Content Below Here */}
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={activeSideBar}>
          <Nav hook={setActiveSideBar} />
          {/* Passes Sidebar Hook to Navbar */}
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
