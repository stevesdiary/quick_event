import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")

export class User {
   @PrimaryGeneratedColumn("uuid")
   organizer_id: string;

   @Column({nullable: false})
   first_name: string;

   @Column({nullable: false})
   last_name: string;

   @Column({nullable: false})
   email: string;

   @Column({nullable: true})
   image: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}