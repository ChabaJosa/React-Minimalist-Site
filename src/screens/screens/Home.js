import React from "react";
// import Nav from "./navbar";
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";

export default function Home() {
  return (
    <div>
      <div class="main-container">
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}
