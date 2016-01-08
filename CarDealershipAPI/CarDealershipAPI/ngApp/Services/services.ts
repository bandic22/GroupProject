namespace MyApp.Services {

    export class CarService {
        private carResource;
        private makeResource;
        constructor(private $resource: ng.resource.IResourceService) {

            this.carResource = $resource("/api/cars/:id");
            this.makeResource = $resource("/api/makes");
        }

        showCars() {
            return this.carResource.query();
        }
        showMake() {

            return this.makeResource.query();
        }

    }

    angular.module("MyApp").service("CarService", CarService); 
    

}