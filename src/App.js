import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

// import HomeSidebar from "./components/sidebar";
import Home from "./components/Home";
import Partnerships from "./components/Partnerships";
import Services from "./components/Services";
import Navbar from "./components/navbar";
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
              <Route path="/Services" component={Services}></Route>
              <Route path="/Partnerships" component={Partnerships}></Route>
            </Switch>
            {/* <Footer /> */}
          </BrowserRouter>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
