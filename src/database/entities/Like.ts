import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("like")

export class Like {
   @PrimaryGeneratedColumn("uuid")
   like_id: string;
   
   @Column({ nullable: false })
   event_id: string;

   @Column({ nullable: false })
   user_id: string;

   @Column({ nullable: false })
   liked: boolean;
}