import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Event } from "./Event";
@Entity("organizers")

export class Organizer {
   @PrimaryGeneratedColumn("uuid")
   id: string;

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

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   @OneToMany(() => Event, (events) => events.organizer_id)
   event: Event[]
}