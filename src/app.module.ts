import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

import { UsersModule } from './users/users.module'
import config from '../ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
      driver: ApolloDriver,
    }),
    UsersModule,
  ],
})
export class AppModule {}
