import { Tambon } from './entity/Tambon';
import { District } from './entity/District';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import "reflect-metadata";
import { Province } from './entity/Province';
import { Postal } from './entity/Postal';

AppDataSource.initialize().then(async () => {

    const provinceRepo = AppDataSource.getRepository(Province)
    // const allProvinces = await provinceRepo.find()
    // console.log("All photos from the db: ", allProvinces)
    const resProvince = await provinceRepo.findOneBy({
        provinceThai: "ตราด",
    })
    console.log("Province from the db: ", resProvince)
    const [photos, photosCount] = await provinceRepo.findAndCount()
   // console.log("All photos: ", photos)
    console.log("Province count: ", photosCount)


    const districtRepo = AppDataSource.getRepository(District)
    const resDistrict = await districtRepo.findOneBy({
        districtThaiShort: "บางรัก",
    })
    console.log("District from the db: ", resDistrict)
    let [photos1, photosCount1] = await districtRepo.findAndCount()
    console.log("District count: ", photosCount1)



    const tambonRepo = AppDataSource.getRepository(Tambon)
    const resTambon = await tambonRepo.findOneBy({
        tambonThaiShort: "บวรนิเวศ",
    })
    console.log("Tambon from the db: ", resTambon)
    let [photos2, photosCount2] = await tambonRepo.findAndCount()
    console.log("Tambon count: ", photosCount2)


    
    const postalRepo = AppDataSource.getRepository(Postal)
    const resPostal = await postalRepo.findOneBy({
        tambonThaiShort: "บวรนิเวศ",
    })
    console.log("Postal from the db: ", resPostal)
    let [photos3, photosCount3] = await postalRepo.findAndCount()
    console.log("Postal count: ", photosCount3)

}).catch(error => console.log(error))
