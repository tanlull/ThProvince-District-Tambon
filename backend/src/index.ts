import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import "reflect-metadata"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new Photos into the database...")
    const photo = new Photo()
    photo.name = "Me and Bears"
    photo.description = "I am near polar bears"
    photo.filename = "photo-with-bears.jpg"
    photo.views = 1
    photo.isPublished = true
    await AppDataSource.manager.save(photo)
    console.log("Photo has been saved. Photo id is", photo.id)

}).catch(error => console.log(error))
