import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Province } from "./province.entity";
import { Tambon } from "./tambon.entity";

@Index("ProvinceID", ["provinceId"], {})
@Entity("District")
export class District {
  @Column("int", { name: "ProvinceID", nullable: true })
  provinceId: number | null;

  @Column("int", { primary: true, name: "DistrictID" })
  districtId: number;

  @Column("varchar", { name: "DistrictThaiShort", length: 200 })
  districtThaiShort: string;

  @Column("varchar", { name: "DistrictEngShort", length: 200 })
  districtEngShort: string;

  @Column("int", { name: "DistrictCNT", nullable: true })
  districtCnt: number | null;

  @ManyToOne(() => Province, (province) => province.districts)
  province: Province;

   @OneToMany(() => Tambon, (tambon) => tambon.district)
  tambons: Tambon[];
}
