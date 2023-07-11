import { Controller, Get, HttpCode, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Honda', 'Toyota', 'Ford', 'BMW'];
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
}
