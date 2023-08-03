import { IsEmail, IsInt, IsNotEmpty, IsNumber, isNumber } from 'class-validator';
export class CreateCarDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    marca: string

    @IsNotEmpty()
    modelo: string
}