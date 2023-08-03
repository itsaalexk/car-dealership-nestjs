import { Injectable, NotFoundException } from '@nestjs/common';
import { TimeoutError } from 'rxjs';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id: 2,
            brand: "Ford",
            model: "Mustang"
        },
        {
            id: 3,
            brand: "Mercedes",
            model: "Brabus"
        }
    ];

    findAll() {

        return this.cars
    }


    findOneById(id: number) {
        const car = this.cars.filter((car) => car.id === id)

        if (car.length === 0) {
            throw new NotFoundException(`Car with id: ${id} not found`);
        }


        return car
    }
    public async postNewCars(body: any) {
        await this.cars.push(body)
    }

    public deleteCars(id: number) {
        return this.cars.filter((specificCar) => specificCar.id === id)
    }

    public deleteCarsByModelAndBrand(brand: string, model: string) {
        return this.cars.filter((element) => element.brand === brand && element.model === model)
    }



}
