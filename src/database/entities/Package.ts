import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Event } from "./Event";
import { Feature } from "./Features";
import { features } from "process";
import { Ticket } from "./Ticket";
@Entity("packages")

export class Package{
   @PrimaryGeneratedColumn("uuid")
   id: string;

   // @Column({ nullable: false })
   // features_id: string;

   @Column({ nullable: false })
   event_id: string;

   @Column({ nullable: false })
   package_name: string;

   @Column({ nullable: true })
   description: string;

   @Column({ nullable: true })
   banner: string;

   @Column({ nullable: false })
   price: number;

   @Column({ nullable: false })
   discounted_price: number;

   @Column({ nullable: false })
   status: number;

   @Column({ nullable: false })
   active_at: Date;

   @Column({ nullable: false })
   expire_at: Date;

   @Column({ nullable: false })
   limit: number;

   @Column({ nullable: true })
   thumbnail: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   // @ManyToOne(() => Event, (events ) => events.package)
   // event: string;

   @OneToMany(() => Feature, (features) => features.package_id, {onDelete: "CASCADE"})
   features: Feature;

   @OneToMany(() => Ticket, (ticket) => ticket.package_id)
   tickets: Ticket[];
}