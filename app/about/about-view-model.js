"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var observable_1 = require("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
            " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        return _this;
    }
    HomeViewModel.prototype.onOpenDrawerTap = function () {
        var sideDrawer = (frame.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    };
    HomeViewModel.prototype.onCloseDrawerTap = function () {
        var sideDrawer = (frame.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFib3V0LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQsK0RBQThEO0FBRTlEO0lBQW1DLGlDQUFVO0lBaUIzQztRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQWxCRCxxQkFBZSxHQUNiLHdJQUF3STtZQUN4SSw2SUFBNkksQ0FBQzs7SUFnQmhKLENBQUM7SUFmRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxVQUFVLEdBQWlDLENBQzdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQzFDLENBQUM7UUFDRixVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFnQixHQUFoQjtRQUNFLElBQUksVUFBVSxHQUFpQyxDQUM3QyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUMxQyxDQUFDO1FBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFLSCxvQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBbUMsdUJBQVUsR0FvQjVDO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gIG1haW5Db250ZW50VGV4dDogc3RyaW5nID1cclxuICAgIFwiU2lkZURyYXdlciBmb3IgTmF0aXZlU2NyaXB0IGNhbiBiZSBlYXNpbHkgc2V0dXAgaW4gdGhlIFhNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyBtYWluLSBhbmQgZHJhd2VyLWNvbnRlbnQuIFRoZSBjb21wb25lbnRcIiArXHJcbiAgICBcIiBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcclxuICBvbk9wZW5EcmF3ZXJUYXAoKSB7XHJcbiAgICBsZXQgc2lkZURyYXdlcjogUmFkU2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPihcclxuICAgICAgZnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwic2lkZURyYXdlclwiKVxyXG4gICAgKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuICBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgbGV0IHNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj4oXHJcbiAgICAgIGZyYW1lLnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcInNpZGVEcmF3ZXJcIilcclxuICAgICk7XHJcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==