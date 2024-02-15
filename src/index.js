import _ from "lodash";
import printMe from "./print";

function component() {
  if (process.env.NODE.ENV !== "production") {
    console.log("Looks like we are in development mode!");
  }
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
