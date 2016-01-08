namespace MyApp.Controllers {
    
    export class HomeController {
        public makes;
        public selectedMake;
        public cars;

        constructor(private CarService: MyApp.Services.CarService) {
            this.makes = this.CarService.showMake();
            this.cars = this.CarService.showCars();
        }

    }

    angular.module('MyApp').controller('HomeController', HomeController);

    export class ModalController {
        
        constructor(private $modal: ng.ui.bootstrap.IModalService) {

        }

    }

    angular.module('MyApp').controller('ModalController', ModalController);

}