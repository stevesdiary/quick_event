import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
 } from "typeorm";

@Entity("subscribers")

export class Subscriber {
   @PrimaryGeneratedColumn("uuid")
   subscriber_id: string;

   @Column({ nullable: false })
   user_id: string;

   @Column({ nullable: false })
   email: string;

   @Column({ nullable: false })
   subscribed: boolean;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}