import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("merchant")

export class Event_date {
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({ nullable: false })
   event_id: string;

   @Column({ nullable: false })
   package_id: string;

   @Column({ nullable: false })
   start_date: string;

   @Column({ nullable: false })
   end_date: string;

   @Column({ nullable: false })
   start_time: string;

   @Column({ nullable: false })
   end_time: string;

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date
}