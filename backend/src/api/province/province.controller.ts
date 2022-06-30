import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProvinceDto } from './province.dto';
import { Province } from './province.entity';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {
    @Inject(ProvinceService)
    private readonly service: ProvinceService;
  
    @Get()
    public getProvince(): Promise<Province[]> {
      return this.service.getAllProvince();
    }

    // @Get(':name')
    // public getProvinceByName(name : string): Promise<Province> {
    //   return this.service.getProvinceByName(name);
    // }

    @Get(':name')
    public getProvinceByName(@Param('name') name : string): Promise<Province> { return this.service.getProvinceByName(name); }
    //public getProvinceById(id:number): Promise<Province> { return this.service.getProvinceById(id); }
  
    @Post()
    public createProvince(@Body() body: CreateProvinceDto): Promise<Province> {
      return this.service.createProvince(body);
    }

}
