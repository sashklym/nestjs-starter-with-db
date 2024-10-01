import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersRepository.find();
    return users.map((user) => this.toResponseObject(user));
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOneBy({ id });
    return this.toResponseObject(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async create(user: Partial<User>): Promise<UserResponseDto> {
    const newUser = this.usersRepository.create(user);
    const savedUser = await this.usersRepository.save(newUser);
    return this.toResponseObject(savedUser);
  }

  private toResponseObject(user: User): UserResponseDto {
    const { id, email, name, role, emailVerified, createdAt, timezone } = user;
    return { id, email, name, role, emailVerified, createdAt, timezone };
  }
}
