var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(CarService) {
                this.CarService = CarService;
                this.makes = this.CarService.showMake();
                this.cars = this.CarService.showCars();
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        angular.module('MyApp').controller('HomeController', HomeController);
        var ModalController = (function () {
            function ModalController($modal) {
                this.$modal = $modal;
            }
            return ModalController;
        })();
        Controllers.ModalController = ModalController;
        angular.module('MyApp').controller('ModalController', ModalController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
