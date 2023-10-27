import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Package } from "./Package";
import { Ticket } from "./Ticket";
import { Like } from "./Like";
import { Event_date } from "./Event_date";

@Entity("events")

export class Event {
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column({ nullable: false })
   category_id: string;

   @Column({ nullable: false })
   organizer_id: string;

   @Column({ nullable: false })
   merchant_id: string;

   @Column({ nullable: false })
   event_name: string;

   @Column({ nullable: true})
   description: string;

   @Column({ nullable: true })
   video: string;

   @Column({ nullable: false })
   start_date: Date;

   @Column({ nullable: false })
   end_date: Date;

   @Column({ nullable: false })
   event_type: string;

   @Column({ nullable: false })
   venue: string;

   @Column({ nullable: true })
   instagram: string;

   @Column({ nullable: true})
   facebook: string;

   @Column({ nullable: true })
   twitter: string;

   @Column({ nullable: false })
   event_email: string;

   @Column({ nullable: true })
   portrait_banner: string;

   @Column({ nullable: true })
   landscape_banner: string;

   @Column({ nullable: true })
   sell: number;

   @Column({ nullable: true })
   payment_status: string;

   @Column({ nullable: true, type: 'varchar', })
   service_charge_from: string;

   @Column({ nullable: true })
   service_fee: number;

   @Column({ nullable: true })
   multi_day: number;

   @Column({ nullable: true })
   status: number;

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date

   @OneToMany(() => Package, (packages) => packages.event_id, {onDelete: "CASCADE"})
   package: Package[];

   @OneToMany(() => Ticket, (tickets) => tickets.event_id)
   ticket: Ticket[];

   @ManyToMany(() => Like)
   @JoinTable()
   likes: Like[];

   @OneToOne(() => Event_date)
   @JoinColumn()
   event_date: Event_date;
}
