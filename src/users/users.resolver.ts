import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { GetUserArgs } from './dto/args/get-user.args'
import { CreateUserInput } from './dto/input/create-user.input'
import { DeleteUserInput } from './dto/input/delete-user.input'
import { UpdateUserInput } from './dto/input/update-user.input'
import { User } from 'src/entities/user.entity'
import { UsersService } from './users.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'getUser' })
  getUser(@Args() user: GetUserArgs): Promise<User> {
    return this.usersService.getUser(user)
  }

  @Query(() => [User], { name: 'getUsers' })
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers()
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('createUser') user: CreateUserInput): Promise<User> {
    return this.usersService.createUser(user)
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(@Args('updateUser') user: UpdateUserInput): Promise<User> {
    return this.usersService.updateUser(user)
  }

  @Mutation(() => User, { name: 'deleteUser' })
  deleteUser(@Args('deleteUser') user: DeleteUserInput): Promise<User> {
    return this.usersService.deleteUser(user)
  }
}
