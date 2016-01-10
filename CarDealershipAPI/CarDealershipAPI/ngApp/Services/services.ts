namespace MyApp.Services {

    export class CarService {
        private carResource;
        private makeResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.carResource = $resource("/api/cars/:id");
            this.makeResource = $resource("/api/makes");
        }

        public showCars() {
            return this.carResource.query();
        }

        public showMakes() {
            return this.makeResource.query();
        }

        public getCars(id) {
            console.log(id);
            return this.carResource.get({id: id});
        }
    }
    angular.module("MyApp").service("CarService", CarService);  
}