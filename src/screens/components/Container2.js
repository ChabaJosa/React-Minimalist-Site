import React from "react";
import { Header, Segment, Container, Divider } from "semantic-ui-react";

export default function Container2() {
  return (
    <>
      <div class="row">
        <div class="col-lg-4 col-12 box-header">
          <Header as="h3" color="green" className={"LineEffect"}>
            Entrenamiento
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
              Líderes en salud y preparación física, programa dirigido para
              todos a su paso y a su ritmo, motívate!
              </p>
            </Container>
          </Segment>
        </div>
        <div class="col-lg-4 col-12 box-header">
          {" "}
          <Header as="h3" color="orange" className={"LineEffect"}>
            Salud
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
            Diversion
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
