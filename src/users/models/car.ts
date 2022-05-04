import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field()
  carId: string;

  @Field()
  brand: string;

  @Field()
  model: string;

  @Field()
  engineType: string;

  @Field()
  transmission: string;

  @Field(() => Int)
  numberOfSeat: number;
}
