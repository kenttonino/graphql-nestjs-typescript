import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCarInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  brand: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  model: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  engineType: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  transmission: string;

  @Field()
  @IsNotEmpty()
  numberOfSeat: number;
}
