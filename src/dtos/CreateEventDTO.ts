import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { Event  } from "../database/entities/Event";
export class CreateEventDTO {
   // @IsNotEmpty()
   // @IsString()
   // @MaxLength(36)
   // event_id: string

   @IsNotEmpty()
   // @MaxLength(36)
   category_id: string;

   @IsNotEmpty()
   // @MaxLength(36)
   organizer_id: string;
   
   @IsNotEmpty()
   // @MaxLength(36)
   merchant_id: string;

   @IsNotEmpty()
   @IsString()
   @MinLength(3)
   @MaxLength(36)
   event_name: string;

   @IsOptional()
   @IsString()
   @MaxLength(100)
   description: string;
   
   @IsNotEmpty()
   @IsOptional()
   @IsString()
   @MaxLength(150)
   video: string;

   @IsNotEmpty()
   @MaxLength(15)
   start_date: Date;

   @IsNotEmpty()
   @MaxLength(15)
   end_date: Date;

   @IsNotEmpty()
   @MaxLength(15)
   event_type: string;

   @IsNotEmpty()
   @MaxLength(100)
   venue: string;

   @MaxLength(25)
   @IsOptional()
   instagram: string;

   @MaxLength(25)
   @IsOptional()
   facebook: string;

   @MaxLength(25)
   @IsOptional()
   twitter: string;

   @IsEmail()
   @MaxLength(25)
   @IsOptional()
   event_email: string;
   
   @MaxLength(225)
   @IsOptional()
   portrait_banner: string;

   @MaxLength(225)
   @IsOptional()
   landscape_banner: string;

   @IsNotEmpty()
   @IsOptional()
   sell: number;

   @IsString()
   @IsNotEmpty()
   payment_status: string;

   @IsNotEmpty()
   @IsString()
   service_charge: number;

   @IsNumber()
   service_fee: number;

   @IsNumber()
   multi_day: number;

   @IsNotEmpty()
   @IsNumber()
   status: number;
}
