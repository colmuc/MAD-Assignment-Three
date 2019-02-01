import { EventData } from "tns-core-modules/data/observable";
import { getFrameById } from "tns-core-modules/ui/frame";
import { Switch } from "tns-core-modules/ui/switch";

export function onPageLoaded(args) {
  console.log("Page Loaded");
  var page = args.object;
  const mySwitch = page.getViewById("mySwitch");
  const myLabel = page.getViewById("myLabel");
  myLabel.visibility = "collapsed";
  mySwitch.on("checkedChange", args => {
    console.log("Checked Changed!", args.value);
    if (args.value) {
      myLabel.visibility = "visible";
    } else {
      myLabel.visibility = "collapsed";
    }
  });
}

export function onTap(args: EventData) {
  alert(
    "My name is Collins Mucyo. This program is in fulfillment of CMSC 4233 (or 5233) Spring 2019 Assignment 2 requirements "
  );
}

export function tapped() {
  const frame = getFrameById("my-frame-id");
  frame.navigate("pages/secondPage/secondPage");
}

export function onChecked(args) {
  let mySwitch = <Switch>args.object;
  if (mySwitch.checked) {
    console.log("I have been checked");
  } else {
    console.log("Nope");
  }
}
