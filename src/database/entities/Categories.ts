import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity("categories")

export class Category{
   @PrimaryGeneratedColumn("uuid")
   category_id: string;

   @Column({ nullable: false })
   name: string;

   @Column({ nullable: false })
   description: string;

   @Column({ nullable: true })
   banner: string;

   @Column({ nullable: true })
   status: number;

   @Column({ nullable: true })
   image_logo: string;

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date
}