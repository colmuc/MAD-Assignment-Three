import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./settings-view-model";
import { getFrameById } from "tns-core-modules/ui/frame";

export function pageLoaded(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = new HomeViewModel();
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
