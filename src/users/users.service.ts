import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { GetUserArgs } from './dto/args/get-user.args'
import { CreateUserInput } from './dto/input/create-user.input'
import { UpdateUserInput } from './dto/input/update-user.input'
import { DeleteUserInput } from './dto/input/delete-user.input'
import { User } from 'src/entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async getUser(getUserData: GetUserArgs): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        userId: getUserData.userId,
      },
    })
  }

  public async getUsers(): Promise<User[]> {
    return await this.userRepository.find()
  }

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    const user = this.userRepository.create({
      userId: uuidv4(),
      ...createUserData,
    })

    return this.userRepository.save(user)
  }

  public async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    return await this.userRepository.save({
      id: updateUserData.id,
      ...updateUserData,
    })
  }

  public async deleteUser(deleteUserData: DeleteUserInput): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: deleteUserData.id,
      },
    })

    return await this.userRepository.remove(user)
  }
}
