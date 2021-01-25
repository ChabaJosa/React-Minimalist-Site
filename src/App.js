import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import HomeSidebar from "./components/sidebar";
import Partnerships from './components/Partnerships'
import Services from './components/Services'
import Navbar from './components/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Color Palette: https://coolors.co/e7d90d-9fce68-353535-ff6f59-dbd3d8
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
        </>
        <Switch>
          <Route exact path="/" component={HomeSidebar}></Route>
          <Route path="/Services" component={Services}></Route>
          <Route path="/Partnerships" component={Partnerships}></Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
