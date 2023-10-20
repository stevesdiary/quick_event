import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
   
   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}