import { Column, Entity, IntegerType, PrimaryGeneratedColumn } from "typeorm";

@Entity("features")

export class Feature {
   @PrimaryGeneratedColumn("uuid")
   feature_id: string;

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
}