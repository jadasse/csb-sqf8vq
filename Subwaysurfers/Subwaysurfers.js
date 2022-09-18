/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Subwaysurfers extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "subwaysurfers",
        "./Subwaysurfers/costumes/subwaysurfers.png",
        { x: 414, y: 360 }
      ),
      new Costume(
        "Screen_Shot_2022-06-21_at_12",
        "./Subwaysurfers/costumes/Screen_Shot_2022-06-21_at_12.png",
        { x: 480, y: 268 }
      ),
      new Costume(
        "tvrswqdc76n31",
        "./Subwaysurfers/costumes/tvrswqdc76n31.jpg",
        { x: 360, y: 360 }
      ),
      new Costume(
        "atheist-veggie-tales-epic-pictures-subscribe-200-baptistmemes-i-28586091",
        "./Subwaysurfers/costumes/atheist-veggie-tales-epic-pictures-subscribe-200-baptistmemes-i-28586091.png",
        { x: 318, y: 360 }
      ),
      new Costume("background4", "./Subwaysurfers/costumes/background4.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop4", "./Subwaysurfers/costumes/backdrop4.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume4", "./Subwaysurfers/costumes/costume4.png", {
        x: 383,
        y: 360
      }),
      new Costume("costume2", "./Subwaysurfers/costumes/costume2.svg", {
        x: 211.3866912724494,
        y: 179.75887037276777
      }),
      new Costume("costume1", "./Subwaysurfers/costumes/costume1.png", {
        x: 480,
        y: 360
      }),
      new Costume("IMG_5808", "./Subwaysurfers/costumes/IMG_5808.png", {
        x: 285,
        y: 360
      }),
      new Costume(
        "bobcaughtyousinning",
        "./Subwaysurfers/costumes/bobcaughtyousinning.png",
        { x: 427, y: 360 }
      ),
      new Costume(
        "mydadworksfor",
        "./Subwaysurfers/costumes/mydadworksfor.png",
        { x: 364, y: 360 }
      ),
      new Costume(
        "whyareyouwhite",
        "./Subwaysurfers/costumes/whyareyouwhite.png",
        { x: 420, y: 360 }
      ),
      new Costume(
        "gotohornyjail",
        "./Subwaysurfers/costumes/gotohornyjail.png",
        { x: 480, y: 336 }
      ),
      new Costume("ilovelean", "./Subwaysurfers/costumes/ilovelean.png", {
        x: 480,
        y: 360
      }),
      new Costume("allah", "./Subwaysurfers/costumes/allah.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "mommy" }, this.whenIReceiveMommy)
    ];
  }

  *startAsClone() {
    this.goto(0, -360);
    this.moveAhead();
    this.visible = true;
    this.costume = this.costumeNumber + 1;
    yield* this.glide(0.25, 0, 0);
    this.deleteThisClone();
  }

  *whenIReceiveMommy() {
    this.goto(0, 0);
    this.costume = this.costumeNumber / this.costumeNumber;
    for (let i = 0; i < 15; i++) {
      yield* this.wait(0.75);
      this.createClone();
      yield* this.glide(0.25, 0, 360);
      this.goto(0, 0);
      this.costume = this.costumeNumber + 1;
      yield;
    }
  }
}
