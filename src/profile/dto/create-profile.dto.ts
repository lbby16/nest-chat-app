import { Transform } from 'class-transformer';
import { IsString, IsDate, IsOptional, IsNumber } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  fullname: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  birthday: Date;

  @IsString()
  @IsOptional()
  horoscope: string;

  @IsString()
  @IsOptional()
  zodiac: string;

  @IsNumber()
  @IsOptional()
  height: number;

  @IsNumber()
  @IsOptional()
  weight: number;

  @IsString()
  account: string;
}
