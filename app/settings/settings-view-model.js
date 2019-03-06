"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var observable_1 = require("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        return _super.call(this) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQsK0RBQThEO0FBRTlEO0lBQW1DLGlDQUFVO0lBYzNDO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBZkQsdUNBQWUsR0FBZjtRQUNFLElBQUksVUFBVSxHQUFpQyxDQUM3QyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUMxQyxDQUFDO1FBQ0YsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLFVBQVUsR0FBaUMsQ0FDN0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FDMUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBS0gsb0JBQUM7QUFBRCxDQUFDLEFBakJELENBQW1DLHVCQUFVLEdBaUI1QztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyYW1lIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICBvbk9wZW5EcmF3ZXJUYXAoKSB7XHJcbiAgICBsZXQgc2lkZURyYXdlcjogUmFkU2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPihcclxuICAgICAgZnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwic2lkZURyYXdlclwiKVxyXG4gICAgKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuICBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgbGV0IHNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj4oXHJcbiAgICAgIGZyYW1lLnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcInNpZGVEcmF3ZXJcIilcclxuICAgICk7XHJcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==