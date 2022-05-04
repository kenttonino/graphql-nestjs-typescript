import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetCarArgs {
  @Field()
  @IsNotEmpty()
  carId: string;
}
