import React from "react";
import { Header, Image, Segment, Container, Divider } from "semantic-ui-react";
import Img from "../pics/SocialPng.png";

export default function Container3() {
  return (
    <>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="container1b">
            <Image src={Img} size="medium" />
          </div>
        </div>
        <div class="col-lg-6 col-12">
          {" "}
          <Header
            as="h3"
            color="green"
            className={"LineEffect"}
            style={{ paddingTop: "1rem" }}
          >
            In Business for decades...
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
            <Container textAlign="justified">
              <Divider />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa strong. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede link mollis pretium. Integer tincidunt.
              </p>
            </Container>
          </Segment>
        </div>
      </div>
    </>
  );
}
