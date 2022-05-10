import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: number

  @Column()
  @Field()
  userId: string

  @Column()
  @Field()
  firstName: string

  @Column()
  @Field()
  lastName: string
}
