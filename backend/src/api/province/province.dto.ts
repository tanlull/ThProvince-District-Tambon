import {  IsNotEmpty, IsString } from 'class-validator';

export class CreateProvinceDto {
  @IsString()
  @IsNotEmpty()
  public ProvinceID: string;

  @IsString()
  @IsNotEmpty()
  public ProvinceThai: string;

  @IsString()
  @IsNotEmpty()
  public ProvinceEng: string;


}