import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto.js';

@Injectable()
export class UserDao {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepository: Repository<User>,
  ) {}

  async saveUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.typeOrmRepository.create(createUserDto);
    return await this.typeOrmRepository.save(user);
  }

  async findAll(){
    return await this.typeOrmRepository.find()
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.typeOrmRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return await this.typeOrmRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, updateData: Partial<User>): Promise<void>{
    await this.typeOrmRepository.update(id, updateData);
  }

  async delete(id: number): Promise<void>{
    await this.typeOrmRepository.delete(id)
  }
}
