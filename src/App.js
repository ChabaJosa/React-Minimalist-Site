import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Nav from "./components/navbar";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";


// Color Palette: https://coolors.co/e7d90d-9fce68-353535-ff6f59-dbd3d8
function App() {
  return (
    <>
      <Nav />
      <div class="container">
        <Container1 />
        <Container2 />
        <Container3 />        
      </div>
    </>
  );
}

export default App;
