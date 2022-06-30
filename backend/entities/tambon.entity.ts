import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Postal } from "./postal.entity";
import { District } from "./district.entity";

@Index("DistrictID", ["districtId"], {})
@Entity("Tambon")
export class Tambon {
  @Column("int", { name: "DistrictID", nullable: true })
  districtId: number | null;

  @Column("int", { primary: true, name: "TambonID" })
  tambonId: number;

  @Column("varchar", { name: "TambonThaiShort", length: 200 })
  tambonThaiShort: string;

  @Column("varchar", { name: "TambonEngShort", length: 200 })
  tambonEngShort: string;

  @OneToMany(() => Postal, (postal) => postal.tambon)
  postals: Postal[];

  @ManyToOne(() => District, (district) => district.tambons)
  district: District;
}
