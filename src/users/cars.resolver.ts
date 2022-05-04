import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetCarArgs } from './dto/args/get-car.args';
import { CreateCarInput } from './dto/input/create-car.input';
import { DeleteCarInput } from './dto/input/delete-car.input';
import { UpdateCarInput } from './dto/input/update-car.input';

import { Car } from './models/car';
import { CarsService } from './cars.service';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Query(() => Car, { name: 'car', nullable: true })
  getCar(@Args() getCarArgs: GetCarArgs): Car {
    return this.carsService.getCar(getCarArgs);
  }

  @Query(() => [Car], { name: 'cars', nullable: 'items' })
  getCars(): Car[] {
    return this.carsService.getCars();
  }

  @Mutation(() => Car)
  createCar(@Args('createCarData') createCarData: CreateCarInput): Car {
    return this.carsService.createCar(createCarData);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarData') updateCarData: UpdateCarInput): Car {
    return this.carsService.updateCar(updateCarData);
  }

  @Mutation(() => Car)
  deleteCar(@Args('deleteCarData') deleteCarData: DeleteCarInput): Car {
    return this.carsService.deleteCar(deleteCarData);
  }
}
