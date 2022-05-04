import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { GetCarArgs } from './dto/args/get-car.args';
import { CreateCarInput } from './dto/input/create-car.input';
import { DeleteCarInput } from './dto/input/delete-car.input';
import { UpdateCarInput } from './dto/input/update-car.input';
import { Car } from './models/car';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  public createCar(createCarData: CreateCarInput): Car {
    const car: Car = {
      carId: uuidv4(),
      ...createCarData,
    };

    this.cars.push(car);

    return car;
  }

  public updateCar(updateCarData: UpdateCarInput): Car {
    const car = this.cars.find((car) => car.carId === updateCarData.carId);
    Object.assign(car, updateCarData);
    return car;
  }

  public getCar(getCarArgs: GetCarArgs): Car {
    return this.cars.find((car) => car.carId === getCarArgs.carId);
  }

  public getCars(): Car[] {
    return this.cars;
  }

  public deleteCar(deleteCarData: DeleteCarInput): Car {
    const carIndex = this.cars.findIndex(
      (car) => car.carId === deleteCarData.carId,
    );

    const car = this.cars[carIndex];

    this.cars.splice(carIndex);

    return car;
  }
}
