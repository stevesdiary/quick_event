import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Event } from "./Event";


@Entity("categories")

export class Category{
   save() {
      throw new Error('Method not implemented.');
   }
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({ nullable: false })
   category_name: string;

   @Column({ nullable: false })
   description: string;

   @Column({ nullable: true })
   banner: string;

   @Column({ nullable: true })
   status: number;

   @Column({ nullable: true })
   image_logo: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   @OneToMany(() => Event, (events) => events.category_id)
   event: Event;
   name: string;
}