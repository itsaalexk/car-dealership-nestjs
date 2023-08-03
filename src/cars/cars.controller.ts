import { Body, Controller, Delete, Get, HttpCode, Logger, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './cars.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Get()
  @HttpCode(200)
  getAllCars() {
    return this.carsService.findAll();
  }


  @Get(":id")
  getCarById(@Param("id", ParseIntPipe) id: number) {
    return this.carsService.findOneById(id)
  }

  @Post()
  async create(@Body() body: any) {
    console.log(`posting ${body.toString()}`)
    return await this.carsService.postNewCars(body)
  }
  @Delete(":id")
  deleteCar(@Param("id", ParseIntPipe) id: number) {
    return this.carsService.deleteCars(id)
  }
  @Delete(":brand/:model")
  deleteByBrandAndModel(@Param("brand") brand: string, @Param("model") model: string) {
    return this.deleteByBrandAndModel(brand, model)
  }
}
