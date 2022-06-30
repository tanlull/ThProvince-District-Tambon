import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "tan-mysql-service",
    port: 3306,
    username: "root",
    password: "toor",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Photo],
})

AppDataSource.initialize()
    .then(() => {
        console.log("DB OK!")
    })
    .catch((error) => console.log(error))
