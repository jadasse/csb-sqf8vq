import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Subwaysurfers from "./Subwaysurfers/Subwaysurfers.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Subwaysurfers: new Subwaysurfers({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 15,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
