namespace MyApp.Controllers {
    
    export class HomeController {
        private makes;
        private cars;
        public selectedMake: number;
        private search;
        private selectedCar;
        
        constructor(private CarService: MyApp.Services.CarService) {
            this.makes = CarService.showMakes();
            this.cars = CarService.showCars();
        }   
        
        //checkMakes() {
        //    for (let i = 0; i < this.cars.length; i++) {
        //        if (this.cars[i].make === this.makes.id) {
        //            let cars[i] = this.makes.id;
        //        }
        //    }
        //    }
    }

    angular.module('MyApp').controller('HomeController', HomeController);

    export class ModalController {
        
        constructor(private $modal: ng.ui.bootstrap.IModalService) {

        }

    }

    angular.module('MyApp').controller('ModalController', ModalController);

}