import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CarsModule } from './users/cars.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    CarsModule,
  ],
})
export class AppModule {}
