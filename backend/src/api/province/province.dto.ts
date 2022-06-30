import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProvinceDto {
  @IsString()
  @IsNotEmpty()
  public ProvinceThai: string;
  public ProvinceEng: string;
  public Region: string;

  @IsNumber()
  public ProvinceID: number;
}