/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './province.dto';
import { Province } from './province.entity';

@Injectable()
export class ProvinceService {

    @InjectRepository(Province)
    private readonly repository: Repository<Province>;
  
    public async getProvince(): Promise<Province[]> {
        const [photos, photosCount]= await this.repository.findAndCount();
      return photos;
    }
  
    public createProvince(body: CreateProvinceDto): Promise<Province> {
      const province: Province = new Province();
  
      province.provinceId = parseInt(body.ProvinceID);
      province.provinceThai = body.ProvinceThai;
      province.provinceEng = body.ProvinceEng;
  
      return this.repository.save(province);
    }
}
