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
            CarService.prototype.showMakes = function () {
                return this.makeResource.query();
            };
            CarService.prototype.getCars = function (id) {
                console.log(id);
                return this.carResource.get({ id: id });
            };
            return CarService;
        })();
        Services.CarService = CarService;
        angular.module("MyApp").service("CarService", CarService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
