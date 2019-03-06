import * as frame from "tns-core-modules/ui/frame";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";

const observableModule = require("tns-core-modules/data/observable");

export class HomeViewModel extends Observable {
  posts: ObservableArray<any>;

  constructor() {
    super();
    this.posts = new ObservableArray([]);
    this.getPosts();
  }

  onCloseDrawerTap() {
    let sideDrawer: RadSideDrawer = <RadSideDrawer>(
      frame.topmost().getViewById("sideDrawer")
    );
    sideDrawer.closeDrawer();
  }

  private getPosts() {
    var url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=da4fccbfcf2d40d788bfcba358cdc6fc";
    var req = new Request(url);

    fetch(req).then(response => {
      response.json().then(items => {
        var children = items.articles;

        children.forEach(item => {
          console.log("we are here " + item);
          this.posts.push({
            title: item.title,
            image: item.urlToImage,
            url: item.url
          });
        });
      });
    });
  }

  viewModel = observableModule.fromObject({
    darkTheme: "Dark Theme"
  });
}
