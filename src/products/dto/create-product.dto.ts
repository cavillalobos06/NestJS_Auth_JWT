import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber({}, { message: 'El precio debe ser un número válido' })
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  stock: number;
}
