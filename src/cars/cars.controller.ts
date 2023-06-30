import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  @HttpCode(200)
  getAllCars() {
    return ['Honda', 'Toyota'];
  }
}
