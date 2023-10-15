import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("organizers")

export class Organizer {
   @PrimaryGeneratedColumn("uuid")
   organizer_id: string;

   @Column({nullable: false})
   organizer_name: string;

   @Column({nullable: false})
   email: string;

   @Column({nullable: true})
   facebook: string;

   @Column({nullable: true})
   instagram: string;

   @Column({nullable: true})
   twitter: string;

   @Column({nullable: true})
   image: string;
}