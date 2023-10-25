import { Column, Entity, IntegerType, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Package } from "./Package";

@Entity("features")

export class Feature {
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({ nullable: false })
   package_id: string;

   @Column({ nullable: false })
   tag: string;

   @Column({ nullable: false })
   amount: number;

   @Column({ nullable: false })
   percentage: number;

   @Column({ nullable: false })
   limit: number;

   @Column({ nullable: false })
   status: number;

   @Column({ nullable: false })
   active_at: Date;

   @Column({ nullable: false })
   expired_at: Date;

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

   @ManyToOne(() => Package, (packages) => packages.features)
   package: Package
}