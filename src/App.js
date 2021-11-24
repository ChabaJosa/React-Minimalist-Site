import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./screens/screens/Home";
// import Partnerships from "./screens/screens/Partnerships";
import Services from "./screens/screens/Services";
import Navbar from "./screens/screens/navbar";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

// Color Palette: https://coolors.co/e7d90d-9fce68-353535-ff6f59-dbd3d8
function App() {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <div>
      {/* SideBar Controls Here */}
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
        {/* SideBar Items Here */}
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
          <a
            href="https://www.instagram.com/teachersegnini/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="instagram" />
            Instagram
          </a>
        </Menu.Item>
        {/* <Menu.Item as="a">
          <a
            href="https://www.facebook.com/mediateamgroup/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="facebook" />
            Facebook
          </a>
        </Menu.Item> */}
        <Menu.Item as="a">
          <a
            href="https://www.twitter.com/javiersegnini"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="twitter" />
            Twitter
          </a>
        </Menu.Item>
        {/* <Menu.Item as="a">
          <a
            href="https://www.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="mobile" />
            Apps
          </a>
        </Menu.Item> */}
        {/* <Menu.Item as="a">
          <a
            href="https://www.theiconicmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="code" />
            Coding
          </a>
        </Menu.Item> */}
      </Sidebar>

      {/* Page Content and Router Below Here */}
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={activeSideBar}>
          <BrowserRouter>
            <>
              {/* Passes Sidebar Hook to Navbar */}
              <Navbar hook={setActiveSideBar} />
            </>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/Servicios" component={Services}></Route>
              {/* <Route path="/Partnerships" component={Partnerships}></Route> */}
            </Switch>
            {/* <Footer /> */}
          </BrowserRouter>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
