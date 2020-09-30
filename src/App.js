import React from "react";
import ContainerLayout from "./component/containerLayout";
import KeyPad from "./component/KeyPad";

import "./styles.css";

export default function App() {
  return (
    <div class="App">
      <ContainerLayout title="Calculator"></ContainerLayout>
      <KeyPad />
    </div>
  );
}
