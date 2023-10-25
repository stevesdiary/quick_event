import { IsAlphanumeric, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { Event  } from "../database/entities/Event";
import { Transform, Type } from "class-transformer";
export class CreateEventDTO {
   @IsNotEmpty()
   // @IsString()
   @MaxLength(36)
   id: string

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
   description: string;
   
   @IsOptional()
   @IsString()
   @MaxLength(150)
   video: string;

   @IsDateString()
   start_date: Date;

   @IsDateString()
   end_date: Date;

   @IsNotEmpty()
   @MaxLength(15)
   event_type: string;

   @IsNotEmpty()
   @MaxLength(100)
   venue: string;

   @MaxLength(45)
   @IsOptional()
   instagram: string;

   @MaxLength(45)
   @IsOptional()
   facebook: string;

   @MaxLength(45)
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

   @IsString()
   service_charge_from: string;

   @IsNumber()
   @Type(() => Number)
   service_fee: number;

   @IsNumber()
   @Type(() => Number)
   multi_day: number;

   @IsNumber()
   @Type(() => Number)
   status: number;
}

export class UpdateEventDTO {
   @IsNotEmpty()
   @IsOptional()
   event_name: string;

   @IsNotEmpty()
   @IsOptional()
   start_date: Date;

   @IsNotEmpty()
   @IsOptional()
   end_date: Date;
}

// export class DeleteEventDTO {

// }
