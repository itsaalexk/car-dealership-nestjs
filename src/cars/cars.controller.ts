import { Controller, Get, HttpCode, Logger, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
constructor(private readonly carsService:CarsService){}
  
  @Get()
  @HttpCode(200)
  getAllCars() {
    return this.carsService.findAll();
  }
  

  @Get(":id")
  getCarById(@Param("id", ParseIntPipe) id:number){
    return this.carsService.findOneById(id)

  }


}
