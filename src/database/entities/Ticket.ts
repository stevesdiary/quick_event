import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity("tickets")

export class Ticket {
   @PrimaryGeneratedColumn("uuid")
   feature_id: string;

   @Column({ nullable: false })
   event_id: string;

   @Column({ nullable: false })
   package_id: string;

   @Column({ nullable: false })
   user_id: string;
   
   @Column({ nullable: false })
   attender_id: string;

   @Column({ nullable: true })
   merchant_id: string;

   @Column({ nullable: false })
   code: number;

   @Column({ nullable: false })
   amount: number;

   @Column({ nullable: false })
   amount_paid: number;

   @Column({ nullable: false })
   status: string;

   @Column({ nullable: false })
   source: string;

   @Column({ nullable: false })
   payment_method: string;

   @Column({ nullable: false })
   reference: string;

   @Column({ nullable: false })
   qrcode: string;

   @Column({ nullable: false })
   credited: string;

   @Column({ nullable: false })
   debited: string;

   @Column({ nullable: false })
   charge_ref: string;

   @Column({ nullable: false })
   merchant_fund_ref: string;

   @Column({ nullable: false })
   merchant_funded: boolean;
}