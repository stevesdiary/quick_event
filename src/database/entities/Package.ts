import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("packages")

export class Package{
   @PrimaryGeneratedColumn("uuid")
   package_id: string;

   @Column({ nullable: false })
   features_id: string;

   @Column({ nullable: false })
   event_id: string;

   @Column({ nullable: false })
   package_name: string;

   @Column({ nullable: true })
   description: string;

   @Column({ nullable: true })
   banner: string;

   @Column({ nullable: false })
   price: number;

   @Column({ nullable: false })
   discounted_price: number;

   @Column({ nullable: false })
   status: number;

   @Column({ nullable: false })
   active_at: Date;

   @Column({ nullable: false })
   expire_at: Date;

   @Column({ nullable: false })
   limit: number;

   @Column({ nullable: true })
   thumbnail: string;
}