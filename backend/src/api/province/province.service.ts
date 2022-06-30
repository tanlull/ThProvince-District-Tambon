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
  
    public  async getAllProvince(): Promise<Province[]> {
        const [photos]=  await this.repository.findAndCount();
      return photos;
    }

    
  
    public  getProvinceByName(searchData :string): Promise<Province> {
        const data=  this.repository.findOne({ where :
           { provinceThai: searchData }
        }
            );
      return data;
    }

    public getProvinceById(id:number): Promise<Province> {
        const data=  this.repository.findOne({where: {provinceId: id}});
      return data;
    }

    public createProvince(body: CreateProvinceDto): Promise<Province> {
      const province: Province = new Province();
  
      province.provinceId = body.ProvinceID;
      province.provinceThai = body.ProvinceThai;
      province.provinceEng = body.ProvinceEng;
        province.region = body.Region;
  
      return this.repository.save(province);
    }
}
