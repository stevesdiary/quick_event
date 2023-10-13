import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EVENTS } from "../../constants/DBTable";

@Entity(EVENTS)

export class Event {
   @PrimaryGeneratedColumn("uuid")
   event_id: string;

   @Column({ nullable: false })
   category_id: string;

   @Column({ nullable: false })
   organizer_id: string;

   @Column({ nullable: false })
   merchant_id: string;

   @Column({ nullable: false })
   event_name: string

   @Column({ nullable: true})
   description: string

   @Column({ nullable: true })
   video: string

   @Column({ nullable: false })
   start_date: Date

   @Column({ nullable: false })
   end_date: Date

   @Column({ nullable: false })
   event_type: string

   @Column({ nullable: false })
   venue: string

   @Column({ nullable: true })
   instagram: string

   @Column({ nullable: true})
   facebook: string

   @Column({ nullable: true })
   twitter: string

   @Column({ nullable: false })
   event_email: string

   @Column({ nullable: true })
   portrait_banner: string

   @Column({ nullable: true })
   landscape_banner: string

   @Column({ nullable: true })
   sell: number

   @Column({ nullable: true })
   payment_status: string

   @Column({ nullable: true })
   service_charge: number

   @Column({ nullable: true })
   service_fee: number

   @Column({ nullable: true })
   multi_day: number

   @Column({ nullable: true })
   status: number

}
