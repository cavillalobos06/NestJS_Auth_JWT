import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Transform } from 'class-transformer'; 

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @MinLength(6)
  password: string;
}