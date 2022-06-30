import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProvinceDto } from './province.dto';
import { Province } from './province.entity';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {
    @Inject(ProvinceService)
    private readonly service: ProvinceService;
  
    @Get(':id')
    public getProvince(): Promise<Province[]> {
      return this.service.getProvince();
    }
  
    @Post()
    public createProvince(@Body() body: CreateProvinceDto): Promise<Province> {
      return this.service.createProvince(body);
    }

}
