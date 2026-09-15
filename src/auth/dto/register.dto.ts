import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @MinLength(6)
  password: string;
}
