import { Column, Entity, OneToMany } from "typeorm";
import { District } from "./district.entity";

@Entity("Province")
export class Province {
  @Column("int", { primary: true, name: "ProvinceID" })
  provinceId: number;

  @Column("varchar", { name: "ProvinceThai", length: 200 })
  provinceThai: string;

  @Column("varchar", { name: "ProvinceEng", length: 200 })
  provinceEng: string;

  @Column("varchar", { name: "Region", length: 200 })
  region: string;

  @OneToMany(() => District, (district) => district.province)
  districts: District[];
}
