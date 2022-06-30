import { Postal } from './entity/Postal';
import { District } from './entity/District';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Province } from "./entity/Province"
import { Tambon } from "./entity/Tambon"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "toor",
    database: "ProvinceDB",
    synchronize: true,
    logging: false,
    entities: [Province,District,Tambon,Postal],
    migrations: [],
    subscribers: [],
})
