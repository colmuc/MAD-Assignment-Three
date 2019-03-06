import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { getFrameById } from "tns-core-modules/ui/frame";

// API key : da4fccbfcf2d40d788bfcba358cdc6fc
// Event handler for Page "pageLoaded" event attached in home-page.xml
var v = new HomeViewModel();
export function pageLoaded(args: EventData) {
  /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
  let page = <Page>args.object;
  page.bindingContext = v;
}
export function onTapHome() {
  const frame = getFrameById("my-frame");
  frame.navigate("home/home-page");
}

export function onTapSettings() {
  const frame = getFrameById("my-frame");
  frame.navigate("settings/settings-page");
}
export function onTapAbout() {
  const frame = getFrameById("my-frame");
  frame.navigate("about/about-page");
}

export function showItem(args) {
  var selectedItem = v.posts.getItem(args.index);
}
