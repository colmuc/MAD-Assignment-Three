"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var observableModule = require("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.viewModel = observableModule.fromObject({
            darkTheme: "Dark Theme"
        });
        _this.posts = new observable_array_1.ObservableArray([]);
        _this.getPosts();
        return _this;
    }
    HomeViewModel.prototype.onCloseDrawerTap = function () {
        var sideDrawer = (frame.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    };
    HomeViewModel.prototype.getPosts = function () {
        var _this = this;
        var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=da4fccbfcf2d40d788bfcba358cdc6fc";
        var req = new Request(url);
        fetch(req).then(function (response) {
            response.json().then(function (items) {
                var children = items.articles;
                children.forEach(function (item) {
                    console.log("we are here " + item);
                    _this.posts.push({
                        title: item.title,
                        image: item.urlToImage,
                        url: item.url
                    });
                });
            });
        });
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELCtEQUE4RDtBQUM5RCwyRUFBeUU7QUFFekUsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUVyRTtJQUFtQyxpQ0FBVTtJQUczQztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQThCRCxlQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQztRQWxDRCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLFVBQVUsR0FBaUMsQ0FDN0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FDMUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxHQUFHLEdBQ0wseUZBQXlGLENBQUM7UUFDNUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ3hCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBRTlCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztxQkFDZCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtILG9CQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFtQyx1QkFBVSxHQXdDNUM7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5jb25zdCBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICBwb3N0czogT2JzZXJ2YWJsZUFycmF5PGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucG9zdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuICAgIHRoaXMuZ2V0UG9zdHMoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICBsZXQgc2lkZURyYXdlcjogUmFkU2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPihcclxuICAgICAgZnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwic2lkZURyYXdlclwiKVxyXG4gICAgKTtcclxuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9zdHMoKSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgXCJodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT11cyZhcGlLZXk9ZGE0ZmNjYmZjZjJkNDBkNzg4YmZjYmEzNThjZGM2ZmNcIjtcclxuICAgIHZhciByZXEgPSBuZXcgUmVxdWVzdCh1cmwpO1xyXG5cclxuICAgIGZldGNoKHJlcSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGl0ZW1zID0+IHtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtcy5hcnRpY2xlcztcclxuXHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2UgYXJlIGhlcmUgXCIgKyBpdGVtKTtcclxuICAgICAgICAgIHRoaXMucG9zdHMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZTogaXRlbS51cmxUb0ltYWdlLFxyXG4gICAgICAgICAgICB1cmw6IGl0ZW0udXJsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XHJcbiAgICBkYXJrVGhlbWU6IFwiRGFyayBUaGVtZVwiXHJcbiAgfSk7XHJcbn1cclxuIl19