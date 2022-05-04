import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateCarInput {
  @Field()
  @IsNotEmpty()
  carId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  numberOfSeat?: number;
}
