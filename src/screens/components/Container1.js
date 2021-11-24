import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import Logo from "../../pics/logo.jpeg";
import Modal from "./Modal";
//
export default function Container1() {
  return (
    <>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="container1a">
            <Header as="h6" color="yellow" className={"LineEffect"}>
              Hola!
            </Header>
            <Header as="h1" size="huge" color="red">
              {/* Leaders in creative and strategic consulting. */}
              Bienvenido a tu vida saludable!
            </Header>
            <Segment
              basic
              //   style
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                paddingLeft: 0,
              }}
            >
              <Modal btnText={"Contactanos!"} />
            </Segment>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="container1b">
            <Image src={Logo} size="medium" circular />
          </div>
        </div>
      </div>
    </>
  );
}
