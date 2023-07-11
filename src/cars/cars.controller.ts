import { Controller, Get, HttpCode, Logger, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Honda', 'Toyota', 'Ford', 'BMW'];
  private readonly logger = new Logger(CarsController.name);
  @Get()
  @HttpCode(200)
  getAllCars() {
    return this.cars;
  }
  @Get(':id')
  getCarById(@Param('id') id: number) {
    console.log({ id });
    return this.cars[id];
  }
  @Get(':name')
  getCarsByName(@Param('name') name: string) {
    console.log({ name });
    if (name === '') {
      return this.logger.log('No car name provided');
    }
    return this.cars.filter((car) => car === name);
  }
}
