import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Tambon } from "./tambon.entity";

@Entity("Postal")
export class Postal {
  @Column("int", { primary: true, name: "TambonID" })
  tambonId: number;

  @Column("int", { primary: true, name: "PostCode" })
  postCode: number;

  @Column("varchar", { name: "TambonThaiShort", length: 200 })
  tambonThaiShort: string;

  @Column("varchar", { name: "DistrictThaiShort", length: 200 })
  districtThaiShort: string;

  @Column("varchar", { name: "ProvinceThai", length: 200 })
  provinceThai: string;

  @Column("varchar", { name: "Region", length: 200 })
  region: string;

  @ManyToOne(() => Tambon, (tambon) => tambon.postals)
  tambon: Tambon;
}
