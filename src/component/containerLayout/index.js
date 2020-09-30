import React from "react";
function ContainerLayout(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
}
export default ContainerLayout;
