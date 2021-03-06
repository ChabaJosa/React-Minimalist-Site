import React from "react";
import { Header, Segment, Container, Divider } from "semantic-ui-react";

export default function Container2() {
  return (
    <>
      <div class="row">
        <div class="col-lg-4 col-12 box-header">
          <Header as="h3" color="green" className={"LineEffect"}>
            App Design
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
                ridiculus mus. 
              </p>
            </Container>
          </Segment>
        </div>
        <div class="col-lg-4 col-12 box-header">
          {" "}
          <Header as="h3" color="orange" className={"LineEffect"}>
            Web Design
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
                ridiculus mus. 
              </p>
            </Container>
          </Segment>
        </div>
        <div class="col-lg-4 col-12 box-header" >
          {" "}
          <Header as="h3" color="yellow" className={"LineEffect"}>
            Graphic Design
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
                ridiculus mus. 
              </p>
            </Container>
          </Segment>
        </div>
      </div>
    </>
  );
}
