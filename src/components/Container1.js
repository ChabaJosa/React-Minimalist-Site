import React from "react";
import { Header, Image} from "semantic-ui-react";
import Logo from "../pics/logo-white-short.png";
export default function Container1() {
  return (
    <>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="container1a">
            <Header as="h6" color="yellow" className={'LineEffect'}>
              Welcome to the future.
            </Header>
            <Header as="h1" size="huge" color="red">
              Leaders in creative and strategic consulting.
            </Header>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="container1b">
            <Image src={Logo} size="medium"  />
          </div>
        </div>
      </div>
    </>
  );
}
