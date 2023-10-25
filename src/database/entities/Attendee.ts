import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("attendees")

export class Attendee {
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({ nullable: false })
   user_id: string;
   
   @Column({ nullable: false })
   first_name: string;

   @Column({ nullable: false })
   last_name: string;

   @Column({ nullable: false })
   phone_number: number;

   @Column({ nullable: true })
   referral_code: string;

   @Column({ nullable: false, default: 1 })
   status: string;
   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date;
}