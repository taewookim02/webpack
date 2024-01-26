import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data-example-1.xml";
import Notes from "./data-example-1.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output "TOML Example"
console.log(toml.owner.name); // output "Tom Preston-Werner"

console.log(yaml.title); // output "YAML Example"
console.log(yaml.owner.name);

console.log(json.title); // output "JSON5 Example"
console.log(json.owner.name);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  // Heello

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
