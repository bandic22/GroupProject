var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.$resource = $resource;
                this.carResource = $resource("/api/cars/:id");
                this.makeResource = $resource("/api/makes");
            }
            CarService.prototype.showCars = function () {
                return this.carResource.query();
            };
            CarService.prototype.showMake = function () {
                return this.makeResource.query();
            };
            return CarService;
        })();
        Services.CarService = CarService;
        angular.module("MyApp").service("CarService", CarService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
