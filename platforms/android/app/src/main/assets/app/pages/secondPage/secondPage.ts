import { EventData } from "tns-core-modules/data/observable";
import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { getFrameById } from "tns-core-modules/ui/frame";

export class GettingStartedViewModel extends Observable {
  constructor() {
    super();
    this.set("mainContentText", 'Tap "Open Drawer" or slide from the left');
  }

  public onOpenDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.showDrawer();
  }

  public onCloseDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.closeDrawer();
  }
}

export function onPageLoaded(args) {
  let page = args.object as Page;
  page.bindingContext = new GettingStartedViewModel();
}

export function onTapFirst() {
  const frame = getFrameById("my-frame-id");
  console.log("I am here");
  frame.navigate("pages/start/startPage");
}
export function onTapSecond() {
  const frame = getFrameById("my-frame-id");
  frame.navigate("pages/secondPage/secondPage");
}
export function onTapThird() {
  const frame = getFrameById("my-frame-id");
  frame.navigate("pages/thirdPage/thirdPage");
}
